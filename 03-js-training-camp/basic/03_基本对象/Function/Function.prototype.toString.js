/**
 * @example function.toString()
 * @description 表示函数源代码的一个字符串
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString#%E7%A4%BA%E4%BE%8B
 */

const foo = () => {
  console.log('hello');
};

console.log(foo.toString());
// () => {
//   console.log('hello');
// };
