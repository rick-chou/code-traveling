/**
 * parseInt(string, radix)
 * 解析一个字符串并返回指定基数的十进制整数
 * radix 是2-36之间的整数，表示被解析字符串的基数
 */

// 当radix 小于 2 或大于 36
// 第一个非空格字符不能转换为数字
// 返回NaN
console.log(parseInt('11', 1)); // NaN
console.log(parseInt('bb1', 10)); // NaN

// 基数为2 二进制只有数字 0 1
console.log(parseInt('555', 2)); // NaN
