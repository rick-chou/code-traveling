/**
 * 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ
 */

console.log(new Date().toString()); // Sun Mar 06 2022 15:29:48 GMT+0800 (China Standard Time)
console.log(new Date().toISOString()); // 2022-03-06T07:29:02.764Z
