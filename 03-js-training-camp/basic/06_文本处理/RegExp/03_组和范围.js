// 匹配括号内的任意字符
const regExp1 = /[abc]/g;
// 匹配不在括号内的字符
const regExp2 = /[^abc]/g;

console.log('abcd'.match(regExp1)); // [ 'a', 'b', 'c' ]
console.log('abcd'.match(regExp2)); // [ 'd' ]

// 匹配括号内的任意字符
const regExp3 = /(a|b|c)/g;
console.log('abcd'.match(regExp3)); // [ 'a', 'b', 'c' ]

// 可以写 A-z 不可以写成 a-Z
// 因为ASCII码表上A在a前面
const regExp4 = /[A-z]/g;
console.log('abcdEFG'.match(regExp4)); // [ 'd' ]
console.log('A'.charCodeAt()); // 65
console.log('a'.charCodeAt()); // 97

// x|y 匹配x或y中的任意字符
console.log('abcd'.match(/a|b/g)); // [ 'a', 'b' ]

// (?<Name>x) 具名捕获组: 匹配"x"并将其存储在返回的匹配项的groups属性中
console.log('web-doc'.match(/-(?<customName>doc)/).groups); // { customName: 'doc' }
