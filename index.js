'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const r = parseFloat(req.params.r);

  if (isNaN(r) || r <= 0) {
    return res.status(400).json({ error: 'promień musi być dodatni' });
  }

  const area = 3.14 * r * r;
  const circumference = 2 * 3.14 * r;

  const result = {
    area: area,
    circumference: circumference,
  };

  res.json(result);
});

//TODO2


//TODO3


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});