const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./src/routes/userRoutes');
const offerRouter = require('./src/routes/offerRouter');
const patientRouter = require('./src/routes/patientRouter');
const { verifyAccessToken } = require('./src/config/tokenGenerator');
const { notFoundMiddleware, defaultErrorHandler } = require('./src/middlewares/error');
const proxyRouter = require('./src/routes/proxyRoutes');
const db = require('./src/db/db');

const app = express();
const PORT = process.env.PORT || 3001;
const CONNECTION_STRING = "mongodb://127.0.0.1:27017/";

// Connect to the database
db.connect(CONNECTION_STRING)
  .then(() => console.log("Database connected."))
  .catch(err => console.log(err.message));

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // React app's URL
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type, Authorization'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Use the proxy routes
app.use('/api/v1/proxy', proxyRouter);
app.use("/api/v1/u/", userRouter);
app.use("/api/v1/u/", offerRouter);
app.use("/api/v1/u/", patientRouter);

// Protected route
app.get('/', verifyAccessToken, (req, res) => res.send('Hello Im a protected route'));

// 404 Not Found middleware
app.use(notFoundMiddleware);

// Error Handling Middleware
app.use(defaultErrorHandler);

// Start server
app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
