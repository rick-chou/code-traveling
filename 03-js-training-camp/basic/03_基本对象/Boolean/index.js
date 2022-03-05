/**
 * Boolean对象是一个布尔值的对象包装器
 * 如果省略或值0，-0，null，false，NaN，undefined，或空字符串（""），该对象具有的初始值false
 */

console.log(new Boolean()); // [Boolean: false]

if (new Boolean()) {
  console.log('我被执行了');
}

console.log(Boolean(new Boolean())); // true

console.log(new Boolean().valueOf()); // false
console.log(new Boolean().toString()); // "false"
