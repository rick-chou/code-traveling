/**
 * @example Symbol.for(key)
 * @description 方法会根据给定的键 key，来从运行时的 symbol 注册表中找到对应的 symbol，如果找到了，则返回它，
 * @description 否则，新建一个与该键关联的 symbol，并放入全局 symbol 注册表中
 * @returns {symbol} 返回由给定的 key 找到的 symbol，否则就是返回新创建的 symbol
 *
 * ps:
 * 和 Symbol() 不同的是，
 * 用 Symbol.for() 方法创建的的 symbol 会被放入一个全局 symbol 注册表中。
 * Symbol.for() 并不是每次都会创建一个新的 symbol，它会首先检查给定的 key 是否已经在注册表中了。
 * 假如是，则会直接返回上次存储的那个。
 * 否则，它会再新建一个
 */

Symbol.for('foo'); // 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
Symbol.for('foo'); // 从 symbol 注册表中读取键为"foo"的 symbol

Symbol.for('bar') === Symbol.for('bar'); // true
Symbol('bar') === Symbol('bar'); // false
