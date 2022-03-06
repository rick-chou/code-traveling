/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
 * 断言的组成之一是边界。对于文本、词或模式，边界可以用来表明它们的起始或终止部分
 */

// ^匹配输入的开头
console.log('abcde'.match(/^a/g)); // [ 'a' ]
console.log('abcde'.match(/^b/g)); // null

// $匹配输入的结束
console.log('abcde'.match(/e$/g)); // [ 'e' ]
console.log('abcde'.match(/a$/g)); // null

// \b 匹配单词边界
console.log('chou'.match(/ou\b/g)) // [ 'ou' ]
console.log('chou'.match(/\bch/g)); // [ 'ch' ]

// \B
console.log('chou'.match(/\Bh/g)); // [ 'h' ]
console.log('chou'.match(/ch\B/g)); // [ 'ch' ]

// x(?=y) x 被 y 跟随时匹配 x
console.log('luckychou'.match(/lucky(?=chou)/g)); // [ 'lucky' ]
console.log('lucky chou'.match(/lucky(?=chou)/g)); // null

// x(?!y) x 没有被 y 紧随时匹配 x
console.log('luckychou'.match(/lucky(?!chou)/g)); // null
console.log('lucky chou'.match(/lucky(?!chou)/g)); // [ 'lucky' ]

// (?<=y)x x 跟随 y 的情况下匹配 x
console.log('luckychou'.match(/(?<=lucky)chou/g)); // [ 'chou' ]
console.log('lucky chou'.match(/(?<=lucky)chou/g)); // null

// (?<!y)x x 不跟随 y 时匹配 x
console.log('luckychou'.match(/(?<!lucky)chou/g)); // null
console.log('lucky chou'.match(/(?<!lucky)chou/g)); // [ 'chou' ]
