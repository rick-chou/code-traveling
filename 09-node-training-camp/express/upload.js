const express = require('express');

const app = express();

app.post('/upload', (req, res, next) => {
  res.json(req.headers);
  let data = '';
  req.on('data', (buffer) => {
    data += buffer;
  });
  req.on('end', () => {
    console.log(data.toString());
  });
});

app.listen(3000, () => {
  console.log('server start...');
});
