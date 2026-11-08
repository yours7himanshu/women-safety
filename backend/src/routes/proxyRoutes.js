const express = require('express');
const axios = require('axios');
const router = express.Router();

// Proxy route for Nominatim API
router.get('/reverse', async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: 'lat and lon query parameters are required.' });
  }

  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
      params: {
        format: 'json',
        lat,
        lon,
      },
      headers: {
        'User-Agent': 'WomenSafetyBackend/1.0 (women-safety-worker)'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Nominatim API:', error);
    res.status(500).json({ error: 'Error fetching data from Nominatim API', details: error.message });
  }
});

module.exports = router;
