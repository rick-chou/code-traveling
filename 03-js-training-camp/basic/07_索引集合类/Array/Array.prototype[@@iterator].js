/**
 * arr[Symbol.iterator]()
 * 等同于 Array.prototype.values()
 */

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

for (const value of it) {
  console.log(value);
}

// 1;
// 2;
// 3;
// 4;
