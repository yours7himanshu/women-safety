const express = require('express');
const axios = require('axios');
const router = express.Router();

// Proxy route for Nominatim API
router.get('/reverse', async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
      params: {
        format: 'json',
        lat,
        lon,
      },
    });
    console.log("Full Response Data:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Nominatim API:', error);
    res.status(500).json({ error: 'Error fetching data from Nominatim API' });
  }
});

module.exports = router;
