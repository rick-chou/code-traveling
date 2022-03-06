/**
 * @example myMap[Symbol.iterator]
 */

const myMap = new Map();
myMap.set('name', 'chou');
myMap.set('age', 18);

const it = myMap[Symbol.iterator]();

for (const [key, val] of it) {
  console.log(key, val);
}

// name chou
// age 18
