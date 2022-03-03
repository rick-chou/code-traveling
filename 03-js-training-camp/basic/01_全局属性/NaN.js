/**
 * 全局属性 NaN 的值表示不是一个数字
 * not a number
 */

console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

console.log(Number.NaN); // NaN

// NaN 只能用Number.isNaN来判断
console.log(Number.isNaN(NaN)); // true
