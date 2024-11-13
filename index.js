'use strict';

const express = require('express');
const app = express();

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



app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);

  if (isNaN(width) || isNaN(height)) {
    return res.status(400).json({ error: 'Podaj poprawne parametry' });
  }

  const area = width * height;
  const perimeter = 2*width + 2*height;

  const result = {
    area: area,
    perimeter: perimeter,
  };

  res.json(result);


});


//TODO3


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});