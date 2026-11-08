const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  }
});

const Offer = (mongoose.models && mongoose.models.Offer) || mongoose.model("Offer", offerSchema);
module.exports = Offer;
