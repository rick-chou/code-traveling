/**
 * 用来判断被传入的参数值是否为一个有限数值（finite number）
 * isFinite 方法检测它参数的数值。
 * 如果参数是 NaN，正无穷大或者负无穷大，会返回false，
 * 其他返回 true
 */

console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
