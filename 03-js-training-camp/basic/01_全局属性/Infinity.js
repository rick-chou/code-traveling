// 全局属性 Infinity 是一个数值，表示无穷大

console.log(Infinity);
console.log(-Infinity);

console.log(Infinity === Infinity); // true
console.log(Infinity === -Infinity); // false

console.log(Number.POSITIVE_INFINITY === Infinity); // true
console.log(Number.NEGATIVE_INFINITY === -Infinity); // true

// 是否是有限的
console.log(Number.isFinite(Infinity)); // false
