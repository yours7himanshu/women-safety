const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
})

 const Offer = new mongoose.model("Offer",offerSchema);
 module.exports = Offer;