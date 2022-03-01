/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
 * 字符类可以区分各种字符，例如区分字母和数字
 */

/**
 * 换行 / 行结束符
 * \n unix 换行
 * \r mac 回车
 * \r\n windows 回车换行
 * CRLF 回车换行
 * LF 换行
 */

const str = `
1
a
B
~
_
`;

// . 匹配任意字符 除了换行和行结束符
console.log(str.match(/./g)); // [ '1', 'a', 'B', '~', '_' ]

// \w 查找数字/字母/下划线
console.log(str.match(/\w/g)); // [ '1', 'a', 'B', '_' ]

// \W 与\w相反
console.log(str.match(/\W/g)); // ['\n', '\n', '\n', '\n', '~', '\n', '\n']

// \d 查找数字
console.log(str.match(/\d/g)); // [ '1' ]

// \D 查找非数字
console.log(str.match(/\D/g)); // ['\n', '\n', 'a', '\n', 'B', '\n', '~', '\n', '_', '\n']

// \s 查找空白字符
console.log(str.match(/\s/g)); // [ '\n', '\n', '\n', '\n', '\n', '\n' ]

// \S 查找非空白字符
console.log(str.match(/\S/g)); // [ '1', 'a', 'B', '~', '_' ]

// \0 查找 NULL 字符

// \n 查找换行符

// \r 查找回车符

// \f 查找换页符

// \t 查找制表符

// \v 查找垂直制表符

// \xxx	查找以八进制数 xxx 规定的字符

// \xdd	查找以十六进制数 dd 规定的字符

// \uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符
// 匹配汉字
console.log('南树'.match(/[\u4e00-\u9fa5]/g));
