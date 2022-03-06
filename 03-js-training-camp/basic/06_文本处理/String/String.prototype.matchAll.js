/**
 *  方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器
 */

const it = 'hello'.matchAll(/[a-z]/g);
console.log(it.next());

// {
//   value: [ 'h', index: 0, input: 'hello', groups: undefined ],
//   done: false
// }
