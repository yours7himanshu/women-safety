const JWT = require('jsonwebtoken');
const createError = require('http-errors');
const invalidatedRefreshTokens = new Set();

const getAccessSecret = () => process.env.ACCESS_TOKEN_SECRET || process.env.JWT_SECRET || 'women_safety_access_token_secret_default_key';
const getRefreshSecret = () => process.env.REFRESH_TOKEN_SECRET || process.env.JWT_SECRET || 'women_safety_refresh_token_secret_default_key';

module.exports = {
  // This function will generate a new access token and return it
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = getAccessSecret();
      const options = {
        expiresIn: '1h',
        audience: String(userId)
      };
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.error(err.message);
          return reject(createError.InternalServerError());
        }
        resolve(token);
      });
    });
  },

  // This function will generate a new refresh token and return it
  signRefreshToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = getRefreshSecret();
      const options = {
        expiresIn: '10d',
        audience: String(userId)
      };
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.error(err.message);
          return reject(createError.InternalServerError());
        }
        resolve(token);
      });
    });
  },

  // This function will verify the access token and return the payload if it is valid
  verifyAccessToken: (req, res, next) => {
    let token = null;

    if (req.headers && req.headers['authorization']) {
      const authHeader = req.headers['authorization'];
      if (authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
      } else {
        token = authHeader;
      }
    } else if (req.cookies && req.cookies.access_token) {
      token = req.cookies.access_token;
    }

    if (!token) return next(createError.Unauthorized());

    JWT.verify(token, getAccessSecret(), (err, payload) => {
      if (err) {
        const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
        return next(createError.Unauthorized(message));
      }
      req.payload = payload;
      next();
    });
  },

  // This function will verify the refresh token and return the payload if it is valid
  verifyRefreshToken: (refreshToken) => {
    return new Promise((resolve, reject) => {
      if (invalidatedRefreshTokens.has(refreshToken)) {
        return reject(createError.Unauthorized('Refresh token has been invalidated'));
      }
      JWT.verify(refreshToken, getRefreshSecret(), (err, payload) => {
        if (err) return reject(createError.Unauthorized());
        const userId = payload.aud;
        resolve(userId);
      });
    });
  },

  // This function will invalidate a refresh token
  invalidateRefreshToken: (refreshToken) => {
    invalidatedRefreshTokens.add(refreshToken);
  }
};
