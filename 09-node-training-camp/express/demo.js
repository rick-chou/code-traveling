const express = require('express');

const app = express();

const middlewareA = (req, res, next) => {
  req.message = '';
  req.message += 'A';
  next();
  res.end(req.message);
};

const middlewareB = async (req, res, next) => {
  await Promise.resolve(() => {
    req.message += 'B';
  });
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
