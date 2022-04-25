const { eq } = require('lodash');

/**
 * @name eq(value, other)
 * @description 比较两者的值，来确定它们是否相等
 * @description https://262.ecma-international.org/6.0/#sec-samevaluezero
 *
 */

var object = { a: 1 };
var other = { a: 1 };
eq(object, object);
// => true

eq(object, other);
// => false

eq('a', 'a');
// => true

eq('a', Object('a'));
// => false

eq(NaN, NaN);
// => true

/**
 *
 * @param {*} value
 * @param {*} other
 */
const _eq = (value, other) => {
  return value === other || (value !== value && other !== other);
};

if (require.main === module) {
  console.log('--------------------------------');
  console.log('[] === []:', [] === []); // false
  console.log('{} === {}', {} === {}); // false
  console.log('NaN === NaN:', NaN === NaN); // false
  console.log('null === null:', null === null); // true
  console.log('undefined === undefined', undefined === undefined); // true
  console.log('--------------------------------');
  console.log(_eq(object, other));
  console.log(_eq([], NaN));
  console.log(_eq(NaN, NaN));
}

module.exports = _eq;

/**
 * The internal comparison abstract operation SameValueZero(x, y),
 * where x and y are ECMAScript language values, produces true or false.
 * Such a comparison is performed as follows:
 * 1.ReturnIfAbrupt(x).
 * 2.ReturnIfAbrupt(y).
 * 3.If Type(x) is different from Type(y), return false.
 * 4.If Type(x) is Undefined, return true.
 * 5.If Type(x) is Null, return true.
 * 6.If Type(x) is Number, then
 *    If x is NaN and y is NaN, return true.
 *    If x is +0 and y is −0, return true.
 *    If x is −0 and y is +0, return true.
 *    If x is the same Number value as y, return true.
 *    Return false.
 * 7.If Type(x) is String, then
 *    If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices) return true; otherwise, return false.
 * 8.If Type(x) is Boolean, then
 *    If x and y are both true or both false, return true; otherwise, return false.
 * 9.If Type(x) is Symbol, then
 *    If x and y are both the same Symbol value, return true; otherwise, return false.
 * 10.Return true if x and y are the same Object value. Otherwise, return false.
 *
 * NOTESameValueZero differs from SameValue only in its treatment of +0 and −0.
 */
