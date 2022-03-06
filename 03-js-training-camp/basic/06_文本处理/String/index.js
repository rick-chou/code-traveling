/**
 * 字符串字面量 (通过单引号或双引号定义) 和 直接调用 String 方法(没有通过 new 生成字符串对象实例)的字符串都是基本字符串。
 * JavaScript会自动将基本字符串转换为字符串对象，只有将基本字符串转化为字符串对象之后才可以使用字符串对象的方法。
 * JavaScript会自动将基本字符串转换为字符串对象，只有将基本字符串转化为字符串对象之后才可以使用字符串对象的方法。
 * JavaScript会自动将基本字符串转换为字符串对象，只有将基本字符串转化为字符串对象之后才可以使用字符串对象的方法。
 */

const str1 = 'hello';
const str2 = String('hello');
const str3 = new String('hello');

console.log(str1); // hello
console.log(str2); // hello
console.log(str3); // [String: 'hello']

console.log(str1 === str2); // true
console.log(str1 === str3); // false

console.log(str1 instanceof String); // false
console.log(str2 instanceof String); // false
console.log(str3 instanceof String); // true

s1 = '2 + 2'; // creates a string primitive
s2 = new String('2 + 2'); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

console.log(eval(s2.valueOf())); // returns the number 4

console.log(str1.length); // 5
console.log(str2.length); // 5
console.log(str3.length); // 5
