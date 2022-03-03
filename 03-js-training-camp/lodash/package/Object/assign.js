const { assign } = require('lodash');

function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

assign({ a: 0 }, new Foo(), new Bar());
// => { 'a': 1, 'c': 3 }

/**
 * @example assign(object, [sources])
 * @description 分配来源对象的可枚举属性到目标对象上。 来源对象的应用规则是从左到右，随后的下一个对象的属性会覆盖上一个对象的属性
 * @param {Object} object
 * @param {Object} sources
 */
const _assign = (object, sources) => {
  // TODO
};

if (require.main === module) {
}

module.exports = _assign;
