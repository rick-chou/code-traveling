/**
 * 修饰符 flags
 * i 对大小写不敏感
 * g 全局匹配
 * m 多行匹配
 * s 允许 . 匹配换行符
 * u 使用unicode码的模式进行匹配
 * y 执行“粘性(sticky)”搜索,匹配从目标字符串的当前位置开始
 */

// 字面量形式
const regExp1 = /[a-z]/i;

// 构造函数
const regExp2 = new RegExp('[a-z]', 'i'); // 字符串模式
const regExp3 = new RegExp(/[a-z]/, 'i'); // 字面量模式

// 正则表达式是对象的一种 也是引用类型
console.log(regExp1 === regExp2); // false
console.log(regExp2 === regExp3); // false
console.log(/[a-z]/i === /[a-z]/i); // false

// 实例属性
console.log(regExp1.flags); // i
console.log(/./s.dotAll); // true
console.log(/./g.global); // true
console.log(/./u.unicode); // true
console.log(/./i.ignoreCase); // true
console.log(/./m.multiline); // true
console.log(/./y.sticky); // true
console.log(regExp1.source); // [a-z]

// 实例方法
// test 该正则在字符串里是否有匹配
console.log(/a/.test('a'));

// exec 在该字符串中执行匹配项的搜索
console.log(/a/.exec('aaa'));
// output Array | null
// [ 'a', index: 0, input: 'aaa', groups: undefined ]
// [0] 匹配到的结果
// input 初始字符串
// index 匹配到的索引

// lastIndex 是正则表达式的一个可读可写的整型属性，用来指定下一次匹配的起始索引
const re = /a/g;
while (re.exec('aaa') !== null) {
  console.log(re.lastIndex);
}

console.log(/a/[Symbol.match]('abc')); // [ 'a', index: 0, input: 'abc', groups: undefined ]

console.log(/a/[Symbol.matchAll]('abc')); // Object [RegExp String Iterator] {}

console.log(/a/[Symbol.search]('abc')); // 0

console.log(/-/[Symbol.split]('a-b-c')); // [ 'a', 'b', 'c' ]

console.log(regExp1.toString()); // /[a-z]/i 重写了Object.prototype.toString方法
