// var obj = {};

// Object.defineProperty(obj, 'name', {
//   // value: 'chou',
//   // writable: true, // 可修改
//   enumerable: true, // 可枚举
//   configurable: true, // 可删除
//   set(newValue) {
//     value = newValue;
//     console.log('set方法执行了');
//   },
//   get() {
//     console.log('get方法执行了');
//     return value;
//   },
// });

// obj.name = 'chou';

const handler = {
  set(obj, prop, value) {
    obj[prop] = value;
    console.log(`${prop}属性的set方法执行了`);
  },
  get(obj, prop) {
    console.log(`${prop}属性的get方法执行了`);
    return obj[prop];
  },
  has(obj, key) {
    console.log('has方法执行了');
    if (key in obj) {
      return true;
    } else {
      return false;
    }
  },
};

var obj = new Proxy({}, handler);

obj.name = 'chou';
obj.age = 18;

console.log(obj.name);
console.log('name' in obj);

console.log(obj.name);
