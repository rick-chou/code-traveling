const Singleton = (function () {
  let instance = null;

  return function (name, age) {
    if (instance) {
      return instance;
    }

    this.name = name;
    this.age = age;

    return (instance = this);
  };
})();

// test
const a = new Singleton('chou', 18);
const b = new Singleton('chou', 18);

console.log(a === b); // true
console.log(a); // { name: 'chou', age: 18 }
