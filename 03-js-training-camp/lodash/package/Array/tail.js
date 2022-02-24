const { tail } = require('lodash');

tail([1, 2, 3]);
// => [2, 3]

/**
 * @example tail(array)
 * @description 获取除了array数组第一个元素以外的全部元素
 * @param {Array} array
 */
const _tail = (array) => {
  return array.slice(1);
};

if (require.main === module) {
  console.log(_tail([1, 2, 3]));
}

module.exports = _tail;
