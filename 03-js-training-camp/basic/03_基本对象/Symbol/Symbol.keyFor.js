/**
 * @example Symbol.keyFor(sym)
 * @description 方法用来获取全局symbol 注册表中与某个 symbol 关联的键
 * @returns 如果全局注册表中查找到该symbol，则返回该symbol的key值，返回值为字符串类型。否则返回undefined
 */

var globalSym = Symbol.for('foo');
Symbol.keyFor(globalSym); // "foo"

var localSym = Symbol(); // 这种方法创建的symbol不在全局中
Symbol.keyFor(localSym); // undefined，
