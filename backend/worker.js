/**
 * Cloudflare Worker Backend for Women-Safety
 * Native Hono Edge Application with Request-Scoped Mongoose Connection Lifecycle.
 */

import { Hono } from 'hono';
import { cors } from 'hono/cors';
import db from './src/db/db.js';
import userController from './src/controllers/userController.js';
import offerController from './src/controllers/offerController.js';
import patientController from './src/controllers/patientController.js';
import tokenGenerator from './src/config/tokenGenerator.js';
import sendEmail from './src/utils/sendEmail.js';

const { verifyAccessToken } = tokenGenerator;

const app = new Hono();

// =============================================================================
// CORS Configuration
// =============================================================================
app.use(
  '*',
  cors({
    origin: (origin) => {
      // Allow all origins (standard for public web/mobile APIs)
      return origin || '*';
    },
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'token', 'X-Requested-With', 'Accept'],
    credentials: true,
    maxAge: 86400,
  })
);

// Global OPTIONS pre-flight handler
app.options('*', (c) => c.text('', 204));

// =============================================================================
// Express-to-Hono Handler Adapter with Request-Scoped DB Discipline
// =============================================================================
export function toHonoHandler(...middlewares) {
  return async (c) => {
    // 1. Sync Worker bindings to process.env
    if (c.env) {
      for (const [k, v] of Object.entries(c.env)) {
        if (typeof v === 'string') {
          process.env[k] = v;
        }
      }
    }

    const mongoUri =
      (c.env && (c.env.MONGO_URI || c.env.MONGODB_URI)) ||
      (typeof process !== 'undefined' && (process.env.MONGO_URI || process.env.MONGODB_URI));

    // 2. Parse Request Body
    const contentType = c.req.header('content-type') || '';
    let parsedBody = {};

    if (contentType.includes('application/json')) {
      try {
        parsedBody = await c.req.json();
      } catch {
        parsedBody = {};
      }
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      try {
        const text = await c.req.text();
        const params = new URLSearchParams(text);
        parsedBody = Object.fromEntries(params.entries());
      } catch {
        parsedBody = {};
      }
    }

    // 3. Parse Headers and Cookies
    const headers = {};
    for (const [k, v] of c.req.raw.headers.entries()) {
      headers[k.toLowerCase()] = v;
    }

    const cookieHeader = headers['cookie'] || '';
    const cookies = {};
    if (cookieHeader) {
      cookieHeader.split(';').forEach((part) => {
        const [k, ...vParts] = part.trim().split('=');
        if (k) {
          cookies[k] = decodeURIComponent(vParts.join('=') || '');
        }
      });
    }

    const query = c.req.query();
    const responseCookies = [];

    const req = {
      body: parsedBody,
      query,
      params: c.req.param(),
      headers,
      cookies,
      header: (name) => headers[name.toLowerCase()],
      get: (name) => headers[name.toLowerCase()],
    };

    let responseSent = false;
    let statusCode = 200;
    let responseData = null;
    let isJson = true;

    const res = {
      status(code) {
        statusCode = code;
        return this;
      },
      cookie(name, val, options = {}) {
        let cookieStr = `${name}=${encodeURIComponent(val)}`;
        if (options.expires) cookieStr += `; Expires=${options.expires.toUTCString()}`;
        if (options.maxAge) cookieStr += `; Max-Age=${options.maxAge}`;
        if (options.httpOnly) cookieStr += '; HttpOnly';
        if (options.secure) cookieStr += '; Secure';
        if (options.sameSite) cookieStr += `; SameSite=${options.sameSite}`;
        cookieStr += '; Path=/';
        responseCookies.push(cookieStr);
        return this;
      },
      json(data) {
        if (!responseSent) {
          responseSent = true;
          responseData = data;
          isJson = true;
        }
        return this;
      },
      send(data) {
        if (!responseSent) {
          responseSent = true;
          responseData = data;
          isJson = typeof data === 'object';
        }
        return this;
      },
      end() {
        responseSent = true;
        return this;
      },
    };

    let needsDB = true;

    try {
      if (needsDB && mongoUri) {
        await db.connect(mongoUri);
      }

      // Execute middleware chain
      for (const mw of middlewares) {
        if (responseSent) break;
        await new Promise((resolve, reject) => {
          let called = false;
          const next = (err) => {
            if (called) return;
            called = true;
            if (err) reject(err);
            else resolve();
          };

          try {
            const ret = mw(req, res, next);
            if (ret && typeof ret.then === 'function') {
              ret.then(() => {
                if (!called && responseSent) resolve();
              }).catch(reject);
            }
          } catch (err) {
            reject(err);
          }
        });
      }

      // Attach any cookies set during the handler
      for (const cookie of responseCookies) {
        c.header('Set-Cookie', cookie, { append: true });
      }

      if (responseSent) {
        return isJson ? c.json(responseData, statusCode) : c.text(String(responseData), statusCode);
      }

      return c.text('OK', 200);
    } catch (err) {
      console.error('Request Error in toHonoHandler:', err);
      const status = err.status || 500;
      return c.json(
        {
          error: {
            status,
            message: err.message || 'Internal Server Error',
          },
        },
        status
      );
    } finally {
      if (needsDB && mongoUri) {
        await db.disconnect();
      }
    }
  };
}

// =============================================================================
// Routes
// =============================================================================

// Root & Health check
app.get('/', (c) => c.text('Server is working fine'));
app.get('/health', (c) => c.json({ status: 'ok', service: 'women-safety-backend', timestamp: new Date().toISOString() }));

// Send Email Route
app.post('/send-email', async (c) => {
  try {
    let body = {};
    try {
      body = await c.req.json();
    } catch {
      body = {};
    }

    const { emails, message } = body;
    if (!emails || !message) {
      return c.json({ message: 'emails and message are required in request body.' }, 400);
    }

    await sendEmail(emails, message, c.env || {});
    return c.json({ message: 'Emails sent successfully' }, 200);
  } catch (error) {
    console.error('Error sending email:', error);
    return c.json({ message: 'Error sending email', error: error.message }, 500);
  }
});

// Proxy Route: OpenStreetMap Nominatim Reverse Geocoding
app.get('/api/v1/proxy/reverse', async (c) => {
  const { lat, lon } = c.req.query();

  if (!lat || !lon) {
    return c.json({ error: 'lat and lon query parameters are required.' }, 400);
  }

  try {
    const url = new URL('https://nominatim.openstreetmap.org/reverse');
    url.searchParams.set('format', 'json');
    url.searchParams.set('lat', String(lat));
    url.searchParams.set('lon', String(lon));

    const response = await fetch(url.toString(), {
      headers: {
        'User-Agent': 'WomenSafetyBackend/1.0 (women-safety-worker)',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      return c.json(
        { error: 'Nominatim API returned an error', status: response.status },
        response.status
      );
    }

    const data = await response.json();
    return c.json(data);
  } catch (error) {
    console.error('Error fetching data from Nominatim API:', error);
    return c.json(
      { error: 'Error fetching data from Nominatim API', details: error.message },
      500
    );
  }
});

// User Auth Routes
app.post('/api/v1/u/register', toHonoHandler(userController.register));
app.post('/api/v1/u/login', toHonoHandler(userController.login));
app.post('/api/v1/u/refresh-token', toHonoHandler(userController.refreshToken));
app.delete('/api/v1/u/logout', toHonoHandler(userController.logout));

// Newsletter / Offer Route
app.post('/api/v1/u/submit-newsletter', toHonoHandler(offerController));

// Patient Problem Route
app.post('/api/v1/u/patient', toHonoHandler(patientController));

// Protected Sample Route
app.get(
  '/api/v1/u/protected',
  toHonoHandler(verifyAccessToken, (req, res) => {
    res.send({ message: 'Hello, you have accessed a protected route.', payload: req.payload });
  })
);

// 404 Fallback
app.notFound((c) => {
  return c.json(
    {
      error: {
        status: 404,
        message: 'Requested route not found',
      },
    },
    404
  );
});

// Global Error Handler
app.onError((err, c) => {
  console.error('Unhandled Global Worker Error:', err);
  const status = err.status || 500;
  return c.json(
    {
      error: {
        status,
        message: err.message || 'Internal Server Error',
      },
    },
    status
  );
});

export default app;
