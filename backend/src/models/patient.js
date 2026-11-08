const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true
  },
  problem: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Patient = (mongoose.models && mongoose.models.Patient) || mongoose.model("Patient", patientSchema);
module.exports = Patient;
