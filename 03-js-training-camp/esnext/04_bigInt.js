const myBigInt = Math.pow(2, 53) - 1;

console.log(myBigInt); // 9007199254740991
console.log(myBigInt + 1); // ???
console.log(myBigInt + 1); // ???
console.log(myBigInt + 1); // ???

const afterPow = 2 ** 53 - 1;
console.log(afterPow);

const num = 100_000_000;

const big_big_big_num = 100000000000000000n;
console.log(big_big_big_num);

// console.log(big_big_big_num + 1);
