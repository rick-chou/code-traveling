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

// output
// name属性的set方法执行了
// age属性的set方法执行了
// name属性的get方法执行了
// chou
// has方法执行了
// true
