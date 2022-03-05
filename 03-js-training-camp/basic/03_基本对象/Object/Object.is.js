/**
 * @example Object.is(value1, value2)
 * @description Object.is() 方法判断两个值是否为同一个值
 *
 * 以下条件返回true
 * 都是 undefined
 * 都是 null
 * 都是 true 或 false
 * 都是相同长度的字符串且相同字符按相同顺序排列
 * 都是相同对象（意味着每个对象有同一个引用）
 * 都是数字且
 *    都是 +
 *    都是 -0
 *    都是 NaN
 *    或都是非零而且非 NaN 且为同一个值
 *
 * @returns {boolean}
 */

console.log(Object.is(NaN, NaN)); // true
