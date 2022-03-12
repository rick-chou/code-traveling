const express = require('express');
const app = express();

const middlewareA = (req, res, next) => {
  console.log('middlewareA...');
  // 将执行权交给下一个中间件 不然程序会一直停留在这里
  next();
};

const middlewareB = (req, res, next) => {
  console.log('middlewareB...');
  next();
};

app.get('/', middlewareA, middlewareB, (req, res) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('server start...');
});
