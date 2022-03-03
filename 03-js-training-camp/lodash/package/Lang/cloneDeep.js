const { cloneDeep } = require('lodash');

/**
 * @name cloneDeep(value)
 * @description 深拷贝
 */

var objects = [{ a: 1 }, { b: 2 }];

var deep = cloneDeep(objects);
// console.log(deep[0] === objects[0]);
// => false

/**
 *
 * @param {*} value
 */
const _cloneDeep = (value) => {
  // TODO
};

if (require.main === module) {
}

module.exports = _cloneDeep;
