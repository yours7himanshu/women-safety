const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/police-stations', async (req, res) => {
  const { latitude, longitude } = req.query;

  try {
    const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=police&addressdetails=1&extratags=1&limit=10&bounded=1&viewbox=${longitude - 0.1},${latitude + 0.1},${longitude + 0.1},${latitude - 0.1}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching police stations from Nominatim API:', error.message);
    res.status(500).json({ message: 'Error fetching police stations', error: error.message });
  }
});

module.exports = router;
