const arrayFun = require('./Array');
const langFun = require('./Lang');
const mathFun = require('./Math');
const numberFun = require('./Number');
const stringFun = require('./String');
const baseFun = require('./Base');

module.exports = {
  ...arrayFun,
  ...langFun,
  ...mathFun,
  ...numberFun,
  ...stringFun,
  ...baseFun,
};
