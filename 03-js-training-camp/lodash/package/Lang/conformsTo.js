const { conformsTo } = require('lodash');
const { _typeof } = require('../Base');

/**
 * @name conformsTo(object, source)
 * @description 通过调用断言source的属性与 object 的相应属性值，检查 object是否符合 source
 */

var object = { a: 1, b: 2 };

conformsTo(object, {
  b: function (n) {
    return n > 1;
  },
});
// => true

conformsTo(object, {
  b: function (n) {
    return n > 2;
  },
});
// => false

/**
 *
 * @param {Object} object
 * @param {Object} source
 */
const _conformsTo = (object, source) => {
  if (
    object === undefined ||
    source === undefined ||
    _typeof(object) !== 'object' ||
    _typeof(source) !== 'object'
  )
    return true;
  const keys = Object.keys(source);
  let resIdx = 0;
  let result = true;
  while (resIdx < keys.length) {
    const key = keys[resIdx];
    const fn = source[key];
    const value = object[key];
    if (_typeof(fn) !== 'function' || fn(value)) {
      resIdx++;
    } else {
      result = false;
      break;
    }
  }
  return result;
};

if (require.main === module) {
  console.log(
    _conformsTo(object, {
      a: function (n) {
        return n > 1;
      },
      b: function (n) {
        return n > 0;
      },
    })
  );
}

module.exports = _conformsTo;
