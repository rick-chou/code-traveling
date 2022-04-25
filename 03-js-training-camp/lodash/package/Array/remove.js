const { remove } = require('lodash');
const _typeof = require('../Base/typeof');

var array = [1, 2, 3, 4];
var evens = remove(array, function (n) {
  return n % 2 == 0;
});

// console.log(array);
// => [1, 3]

// console.log(evens);
// => [2, 4]

/**
 * @example remove(array, [predicate=_.identity])
 * @description 移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。
 * @description predicate（断言） 会传入3个参数： (value, index, array)
 * @param {Array} array
 * @param {Array|Function|Object|string} predicate
 */
const _remove = (array, predicate) => {
  let result;
  switch (_typeof(predicate)) {
    case 'function':
      result = array.filter((item) => !predicate(item));
      break;
    case 'string':
      result = array.filter((item) => item !== predicate);
      break;
    case 'array':
      result = array.filter((item) => !predicate.includes(item));
      break;
    default:
      break;
  }
  array.length = result.length;
  result.forEach((item, idx) => {
    array[idx] = item;
  });
};

if (require.main === module) {
  var array = [1, 2, 3, 4];
  var evens = remove(array, function (n) {
    return n % 2 == 0;
  });
  console.log(array);
  console.log(evens);
}

module.exports = _remove;
