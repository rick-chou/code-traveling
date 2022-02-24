const arrayFun = require('./Array');
const langFun = require('./Lang');
const mathFun = require('./Math');
const numberFun = require('./Number');
const stringFun = require('./String');
const functionFun = require('./Function');
const setFun = require('./Set');
const objectFun = require('./Object');
const baseFun = require('./Base');

module.exports = {
  ...arrayFun,
  ...langFun,
  ...mathFun,
  ...numberFun,
  ...stringFun,
  ...functionFun,
  ...setFun,
  ...objectFun,
  ...baseFun,
};
