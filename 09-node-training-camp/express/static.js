const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('server start...');
});
