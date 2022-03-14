const express = require('express');

const router = express.Router();

router.get('/add', (req, res, next) => {
  res.end('added');
});

router.post('/delete', (req, res, next) => {
  res.end('deleted');
});

router.post('/update', (req, res, next) => {
  res.end('updated');
});

router.post('/select', (req, res, next) => {
  res.end('selected');
});

module.exports = router;
