/**
 * eval() 函数会将传入的字符串当做 JavaScript 代码进行执行
 */

console.log(eval('1+1')); // 2
console.log(new String('1+1')); // [String: '1+1']

// 永远不要使用 eval！
// eval() 是一个危险的函数， 它使用与调用者相同的权限执行代码
eval('console.log("恶意代码被执行了")');
