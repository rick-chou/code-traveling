/**
 * BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。
 * 这原本是 Javascript中可以用 Number 表示的最大数字。
 * BigInt 可以表示任意大的整数。
 */

/**
 * 声明
 */
// 可以用在一个整数字面量后面加 n 的方式定义一个 BigInt
const num = 100n;
console.log(num);

// 或者调用BigInt 不能使用new BigInt
console.log(BigInt(100));

// TypeError: BigInt is not a constructor
// new BigInt(1);

/**
 * 比较
 */
// BigInt 和 Number 不是严格相等的，但是宽松相等的
0n === 0; // ↪ false

0n == 0; // ↪ true

// Number 和 BigInt 可以进行比较
1n < 2; // ↪ true

2n > 1; // ↪ true
