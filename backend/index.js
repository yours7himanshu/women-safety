require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sendEmail = require('./src/utils/sendEmail');  // Import the sendEmail function
const userRouter = require('./src/routes/userRoutes');
const offerRouter = require('./src/routes/offerRouter');
const patientRouter = require('./src/routes/patientRouter');
const { verifyAccessToken } = require('./src/config/tokenGenerator');
const { notFoundMiddleware, defaultErrorHandler } = require('./src/middlewares/error');
const proxyRouter = require('./src/routes/proxyRoutes');
const db = require('./src/db/db');

const app = express();
const PORT = process.env.PORT || 3001;
const CONNECTION_STRING = process.env.MONGO_URI;

// Connect to the database
db.connect(CONNECTION_STRING)
  .then(() => console.log("Database connected."))
  .catch(err => console.log(err.message));

// Middleware
app.use(cors({
  
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Route to send email
app.post('/send-email', async (req, res) => {
  const { emails, message } = req.body;

  try {
   const info = await sendEmail(emails, message);
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error });
  }
});

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
