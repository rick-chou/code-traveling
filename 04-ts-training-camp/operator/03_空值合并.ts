/**
 * ?? 只会判断 undefined null
 * || 会判断所有假值
 * 假值
 * undefined
 * null
 * false
 * ''
 * 0
 */

const num1 = null ?? 1;
const num2 = undefined ?? 1;
console.log(num1, num2);

const num3 = 0 ?? 1;
const num4 = 0 || 1;
console.log(num3, num4);

const num5 = false ?? 1;
const num6 = false || 1;
console.log(num5, num6);
