// Assuming the Offer model is located in '../models/offer.js'
const Offer = require('../models/offer.js');

const offerController = async (req, res) => {
    const { email } = req.body;
    try {
        // Check if Offer model is defined before calling create method
        if (Offer) {
            await Offer.create({ email });
            res.status(201).json({
                success: true,
                message: "Your email added successfully"
            });
        } else {
            throw new Error('Offer model is not defined');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while adding the email"
        });
    }
};

module.exports = offerController;
