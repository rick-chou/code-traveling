const { zip, unzip } = require('lodash');

var zipped = zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]

unzip(zipped);
// => [['fred', 'barney'], [30, 40], [true, false]]

/**
 * @example unzip(array)
 * @description 这个方法类似于_.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。
 * @description （：返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）
 * @param {Array} array
 */
const _unzip = (array) => {
  // TODO
};

if (require.main === module) {
  console.log(_unzip(zipped));
}

module.exports = _unzip;
