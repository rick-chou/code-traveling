function log(Class) {
  return (...args) => {
    console.log(args);
    return new Class(...args);
  };
}

@log
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const cat = new Animal('Hello kitty', 2);

//  ["Hello kitty", 2]
console.log(cat.name);
// Hello kitty

@log
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const cat = new Animal('Hello kitty', 2);

//  ["Hello kitty", 2]
console.log(cat.name);
// Hello kitty
