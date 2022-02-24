const { head } = require('lodash');

head([1, 2, 3]);
// => 1

head([]);
// => undefined

/**
 * @example head(array)
 * @description 获取数组 array 的第一个元素
 * @param {Array} array
 * @return {Array | undefined}
 */
const _head = (array) => {
  return array && array.length ? array[0] : undefined;
};

if (require.main === module) {
  console.log(_head([1, 2, 3]));
  console.log(_head([]));
}

module.exports = _head;
