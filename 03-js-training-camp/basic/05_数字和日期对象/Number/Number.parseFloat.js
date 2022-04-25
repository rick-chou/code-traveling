/**
 * parseFloat(string)
 * 解析一个参数（必要时先转换为字符串）并返回一个浮点数
 */

// 第二个小数点的出现也会使解析停止（在这之前的字符都会被解析）
console.log(parseFloat('1.111.12345')); // 1.111

// 如果 parseFloat 在解析过程中遇到了
// 正号（+）、
// 负号（- U+002D HYPHEN-MINUS）、
// 数字（0-9）、小数点（.）、
// 或者科学记数法中的指数（e 或 E）以外的字符，
// 则它会忽略该字符以及之后的所有字符，
// 返回当前已经解析到的浮点数
console.log(parseFloat('111+11')); // 111

// 如果参数字符串的第一个字符不能被解析成为数字,则 parseFloat 返回 NaN
console.log(parseFloat('d112')); // NaN
