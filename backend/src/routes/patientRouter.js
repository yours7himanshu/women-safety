const express = require('express');
const patientController = require('../controllers/patientController');

const patientRouter = express.Router();


patientRouter.post("/patient",patientController);


module.exports = patientRouter;