const Patient = require('../models/patient');

const patientController = async (req, res) => {
    const { name, email, phone_no, problem, description } = req.body;

    try {
        if (Patient) {
            await Patient.create({
                name,
                email,
                phone_no,
                problem,
                description,
            });
            res.status(201).json({
                success: true,
                message: "Patient problem received",
            });
        } else {
            throw new Error('Patient model is not defined');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred",
        });
    }
};

module.exports = patientController;
