const { chunk } = require('lodash');

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

/**
 * @example chunk(array, [size=1])
 * @param array (Array): 需要处理的数组
 * @param [size=1] (number): 每个数组区块的长度
 * @description 数组切片
 * @param {Array} array
 * @param {number} size
 */
const _chunk = (array, size = 1) => {
  if (!Array.isArray(array) || !array.length || !size) {
    return [];
  }
  let resIndex = 0,
    length = Math.ceil(array.length / size);
  const result = Array(length);
  while (resIndex < length) {
    result[resIndex] = array.slice(resIndex * size, (resIndex + 1) * size);
    resIndex++;
  }
  return result;
};

if (require.main === module) {
  console.log(_chunk(['a', 'b', 'c', 'd'], 2));
  console.log(_chunk(['a', 'b', 'c', 'd'], 3));
  console.log(_chunk([], 3));
  console.log(_chunk(null, 3));
  console.log(_chunk(4, 3));
}

module.exports = _chunk;
