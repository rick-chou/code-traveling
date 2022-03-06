/**
 *
 */

const arr = [1, 2, 3, 4, 5];

const it = arr.values(arr);

for (const value of it) {
  console.log(value);
}

// 1;
// 2;
// 3;
// 4;
// 5;
