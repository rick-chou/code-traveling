/**
 * @example Reflect.ownKeys(target)
 * @description Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组
 */

Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

var sym = Symbol.for('comet');
var sym2 = Symbol.for('meteor');
var obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  '-1': 0,
  8: 0,
  'second str': 0,
};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// Indexes in numeric order,
// strings in insertion order,
// symbols in insertion order
