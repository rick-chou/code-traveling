/**
 * @description Symbol.match 指定了匹配的是正则表达式而不是字符串。String.prototype.match() 方法会调用此函数
 */

'/bar/'.startsWith(/bar/);

// Throws TypeError, 因为 /bar/ 是一个正则表达式
// 且 Symbol.match 没有修改。

var re = /foo/;
re[Symbol.match] = false;
'/foo/'.startsWith(re); // true
'/baz/'.endsWith(re); // false
