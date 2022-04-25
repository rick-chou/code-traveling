const { castArray } = require('lodash');

/**
 * @name castArray(value)
 * @description 如果 value 不是数组, 那么强制转为数组
 */

castArray(1);
// => [1]

castArray({ a: 1 });
// => [{ 'a': 1 }]

castArray('abc');
// => ['abc']

/**
 *
 * @param {*} value
 */
const _castArray = (value) => {
  if (value === undefined) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
};

if (require.main === module) {
  console.log(_castArray(1));
  console.log(_castArray({ a: 1 }));
  console.log(_castArray('abc'));
}

module.exports = _castArray;
