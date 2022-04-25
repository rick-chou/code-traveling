const express = require('express');

const app = express();

app.get('/query', (req, res, next) => {
  res.json(req.query);
});

app.get('/param/:id', (req, res, next) => {
  res.json(req.params);
});

app.listen(3000, () => {
  console.log('server start...');
});
