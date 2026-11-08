import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import app from './worker.js';

describe('Women Safety Cloudflare Worker Integration Tests', () => {
  test('GET / returns Server is working fine', async () => {
    const res = await app.request('http://localhost/');
    assert.equal(res.status, 200);
    const text = await res.text();
    assert.equal(text, 'Server is working fine');
  });

  test('GET /health returns JSON status ok', async () => {
    const res = await app.request('http://localhost/health');
    assert.equal(res.status, 200);
    const json = await res.json();
    assert.equal(json.status, 'ok');
    assert.equal(json.service, 'women-safety-backend');
    assert.ok(json.timestamp);
  });

  test('OPTIONS preflight returns 204 with CORS headers', async () => {
    const res = await app.request('http://localhost/api/v1/u/register', {
      method: 'OPTIONS',
      headers: {
        Origin: 'https://women-safety.vercel.app',
        'Access-Control-Request-Method': 'POST',
      },
    });
    assert.equal(res.status, 204);
    assert.equal(res.headers.get('access-control-allow-origin'), 'https://women-safety.vercel.app');
  });

  test('GET non-existent route returns 404 JSON', async () => {
    const res = await app.request('http://localhost/api/v1/nonexistent');
    assert.equal(res.status, 404);
    const json = await res.json();
    assert.equal(json.error?.status, 404);
    assert.equal(json.error?.message, 'Requested route not found');
  });

  test('POST /send-email without parameters returns 400', async () => {
    const res = await app.request('http://localhost/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    assert.equal(res.status, 400);
    const json = await res.json();
    assert.ok(json.message.includes('emails and message are required'));
  });

  test('GET /api/v1/proxy/reverse without query returns 400', async () => {
    const res = await app.request('http://localhost/api/v1/proxy/reverse');
    assert.equal(res.status, 400);
    const json = await res.json();
    assert.ok(json.error.includes('lat and lon'));
  });

  test('POST /api/v1/u/register with invalid data returns 422', async () => {
    const res = await app.request('http://localhost/api/v1/u/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'A' }),
    });
    assert.equal(res.status, 422);
    const json = await res.json();
    assert.equal(json.error?.status, 422);
  });

  test('POST /api/v1/u/login with invalid data returns 400', async () => {
    const res = await app.request('http://localhost/api/v1/u/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'not-an-email' }),
    });
    assert.equal(res.status, 400);
    const json = await res.json();
    assert.equal(json.error?.status, 400);
  });
});
