/**
 * @description Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环使用
 *
 * ps
 * 一些内置类型拥有默认的迭代器行为，其他类型（如 Object）则没有。下表中的内置类型拥有默认的@@iterator方法：
 * Array.prototype[@@iterator]()
 * TypedArray.prototype[@@iterator]()
 * String.prototype[@@iterator]()
 * Map.prototype[@@iterator]()
 * Set.prototype[@@iterator]()
 */

const arr = [1, 2, 3, 4, 5];
const arrIt = arr[Symbol.iterator]();

for (const val of arrIt) {
  console.log(val);
}

// 1;
// 2;
// 3;
// 4;
// 5;
