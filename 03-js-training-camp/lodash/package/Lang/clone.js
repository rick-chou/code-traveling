const { clone } = require('lodash');

/**
 * @name clone(value)
 * @description arguments对象的可枚举属性会拷贝为普通对象。
 * @description 一些不可拷贝的对象，例如error objects、functions, DOM nodes, 以及 WeakMaps 会返回空对象
 */

var objects = [{ a: 1 }, { b: 2 }];

var shallow = clone(objects);
// console.log(shallow[0] === objects[0]);
// => true

/**
 *
 * @param {*} value
 */
const _clone = (value) => {
  // TODO
};

if (require.main === module) {
}

module.exports = _clone;
