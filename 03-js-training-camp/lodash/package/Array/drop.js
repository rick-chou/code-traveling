const { drop } = require('lodash');
const { dropWhile } = require('lodash');
const { dropRight } = require('lodash');
const { dropRightWhile } = require('lodash');
const { _difference } = require('./');

var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

dropWhile(users, function (o) {
  return !o.active;
});
// => objects for ['pebbles']

drop([1, 2, 3]);
// => [2, 3]

/**
 *
 * @param {Array} array
 * @param {Number} number
 * @param {Function} func
 */
const _drop = (array, number = 1, func) => {
  if (!number) {
    return array;
  }
  if (!func) {
    return array.slice(number);
  }
  let index = 0,
    res = [];
  while (res.length < number) {
    if (func(array[index])) {
      res.push(array[index]);
    }
    index++;
  }
  return _difference(array, res);
};

if (require.main === module) {
  console.log(
    _drop([1, 2, 3], 1, (item) => {
      return item > 2;
    })
  );
}

module.exports = _drop;
