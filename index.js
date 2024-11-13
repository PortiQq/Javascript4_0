'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');


//Zadanie 1
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


//Zadanie 2
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

//Zadanie 3
app.get('/math/power/:base/:exponent', (req, res) => {
  const base = parseFloat(req.params.base);
  const exp = parseFloat(req.params.exponent);
  const root = req.query.root === 'true';

  if (isNaN(base) || isNaN(exp)) {
    return res.status(400).json({ error: 'Podaj poprawne parametry' });
  }

  const power = Math.pow(base, exp);

  const result = {
    result: power,
  };

  if (root) {
    result.root = Math.sqrt(base);
  }

  res.json(result);
});

//Zadanie 4
//Załadowanie bazy żartów
let jokesData;
fs.readFile(path.join(__dirname, 'jokebook.json'), 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading jokebook.json:', err);
    jokesData = { error: 'Could not load jokebook' };
  } else {
    jokesData = JSON.parse(data);
  }
});

//Zadanie 5
app.get('/jokebook/categories', (req, res) => { 
  if (jokesData && jokesData.categories) {
    res.json(jokesData.categories);
  } else {
    res.status(500).json({ error: 'Błąd pobrania kategorii' });
  }
});

app.get('/jokebook/categories/:category', (req, res) => { 

  const category = req.params.category;

  if (jokesData && jokesData[category]) {
    res.json(jokesData[category]);
  } else {
    res.status(500).json({ error: `No jokes for category ${category}` });
  }
});




const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});