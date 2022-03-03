/**
 * isNaN() 函数用来确定一个值是否为NaN
 * 与 JavaScript 中其他的值不同，
 * NaN不能通过相等操作符（== 和 ===）来判断 ，
 * 因为 NaN == NaN 和 NaN === NaN 都会返回 false。
 * 因此，isNaN 就很有必要了
 *
 */

console.log(0 / 0); // NaN
console.log(-1 / 0); // -Infinity
console.log(1 / 0); // Infinity

// 当不是数字时 isNaN会把里面的内容先强制转化为数字 例如 false --> 0 true --> 1
// 可以利用这个特殊行为来检测函数的参数是可运算的
console.log(isNaN(' ')); // false
console.log(isNaN(false)); // false
