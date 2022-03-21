/**
 * @description Symbol.matchAll 返回一个迭代器，该迭代器根据字符串生成正则表达式的匹配项。此函数可以被 String.prototype.matchAll() 方法调用
 */

'abc'.matchAll(/a/);

/a/[Symbol.matchAll]('abc');
