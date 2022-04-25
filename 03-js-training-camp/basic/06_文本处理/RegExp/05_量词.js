/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers
 * https://docs.microsoft.com/zh-cn/dotnet/standard/base-types/quantifiers-in-regular-expressions
 * 量词表示要匹配的字符或表达式的数量
 */

// x* 匹配上一个元素零次或多次  === {0,}
console.log('abbbbbc'.match(/ab*/g)); // [ 'abbbbb' ]

// x+ 匹配上一个元素一次或多次  === {1,}
console.log('abbbbbc'.match(/ab+/g)); // [ 'abbbbb' ]
console.log('ac'.match(/ab+/g)); // null

// x? 匹配上一个元素一次或多次
console.log('abbbbbc'.match(/ab?/g)); // [ 'ab' ]

// x{n} 恰好匹配 n 次
console.log('abbbbbc'.match(/ab{1}/g)); // [ 'ab' ]
console.log('abbbbbc'.match(/ab{2}/g)); // [ 'abb' ]

// x{n,} 至少匹配 n 次
console.log('abbbbbc'.match(/ab{1}/g)); // [ 'ab' ]

// x{n,m} 匹配 n 到 m 次
console.log('abbbbbc'.match(/ab{1,3}/g)); // [ 'abbb' ]
