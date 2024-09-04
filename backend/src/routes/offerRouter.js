const express = require('express');
const offerController = require("../controllers/offerController"); // Importing the offerController function

const offerRouter = express.Router();

// Assuming you have applied the express.json() middleware to parse JSON data
// If not, make sure to add it before defining routes
// app.use(express.json());

// Define the POST route
offerRouter.post("/submit-newsletter", offerController);

module.exports = offerRouter;
