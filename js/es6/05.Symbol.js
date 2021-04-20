const mySymbol = Symbol('symbol');
const mySymbol1 = Symbol('symbol');
const mySymbol2 = Symbol('symbol');
const mySymbol3 = Symbol('symbol');
const a = {};
a.mySymbol = 'Hello!';
a[mySymbol]; // undefined
a['mySymbol']; // "Hello!"

console.log(a[mySymbol]);
console.log(a['mySymbol']);
console.log(a.mySymbol);

console.log(mySymbol1 === mySymbol3);

let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');
console.log(s1 === s2); // true
