const { zip } = require('lodash');

zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]

/**
 * @example zip([arrays])
 * @description 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推
 * @param {Array<Array>} array
 */
const _zip = (...array) => {
  return array.reduce(
    (pre, cur) => {
      pre[0].push(cur[0]);
      pre[1].push(cur[1]);
      return pre;
    },
    [[], []]
  );
};

if (require.main === module) {
  console.log(_zip(['fred', 'barney'], [30, 40], [true, false]));
}

module.exports = _zip;
