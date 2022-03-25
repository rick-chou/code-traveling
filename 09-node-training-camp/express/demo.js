const express = require('express');

const app = express();

const middlewareA = async (req, res, next) => {
  req.message = '';
  req.message += 'A';
  await next();
  res.end(req.message);
};

const middlewareB = async (req, res, next) => {
  req.message += await Promise.resolve('B');
  await next();
};

const middlewareC = (req, res, next) => {
  req.message += 'C';
  next();
};

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);

app.listen(3000, () => {
  console.log('server start...');
});
