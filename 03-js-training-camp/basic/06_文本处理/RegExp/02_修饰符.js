/**
 * 修饰符 flags
 * i 对大小写不敏感
 * g 全局匹配
 * m 多行匹配
 * s 允许 . 匹配换行符
 * u 使用unicode码的模式进行匹配
 * y 执行“粘性(sticky)”搜索,匹配从目标字符串的当前位置开始
 */

const regI = /[a-z]/i;
const regG = /[a-z]/g;
const regM = /[a-z]/m;

const str = 'aBcDeFg';
console.log(str.match(regI)); // [ 'a', index: 0, input: 'aBcDeFg', groups: undefined ]
console.log(str.match(regG)); // [ 'a', 'c', 'e', 'g' ]
console.log(str.match(regM)); // [ 'a', index: 0, input: 'aBcDeFg', groups: undefined ]

// 修饰符可以组合
const regIG = /[a-z]/gi;
const regGM = /[a-z]/gm;

const mStr = `
  a1
  b2
  c3
`;

console.log(mStr.match(regG)); // ['a', 'b', 'c'];
console.log(mStr.match(regGM)); // ['a', 'b', 'c'];

// 使用带有 sticky 标志的正则表达式
const regY = /[a-z]/y;
console.log(str.match(regY)); // [ 'a', index: 0, input: 'aBcDeFg', groups: undefined ]
regY.lastIndex = 2;
console.log(str.match(regY)); // [ 'c', index: 2, input: 'aBcDeFg', groups: undefined ]

// 除了 y 之外 这种操作都无效
regI.lastIndex = 2;
console.log(str.match(regI)); // [ 'c', index: 2, input: 'aBcDeFg', groups: undefined ]
