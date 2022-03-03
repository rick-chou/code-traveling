/**
 * 全局属性 globalThis 包含全局的 this 值，类似于全局对象（global object）
 *
 * 在 Web 中，可以通过 window、self 或者 frames 取到全局对象
 * 在 Web Workers 中，只有 self 可以
 * 在 Node.js 中，它们都无法获取，必须使用 global
 *
 * globalThis 提供了一个标准的方式来获取不同环境下的全局 this  对象
 */

console.log(globalThis === global); // true
