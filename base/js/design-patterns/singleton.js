const Singleton = (function () {
  let instance = null;

  return function () {
    if (instance) {
      return instance;
    }
    // 你的业务逻辑
    // 例如
    this.name = 'chou';
    this.age = 18;

    return (instance = this);
  };
})();

// test
const a = new Singleton();
const b = new Singleton();

console.log(a === b); // true
console.log(a); // { name: 'chou', age: 18 }
