// 定义一个父类
function Father(name) {
  // 属性
  this.name = name || '->father';
  // 实例方法
  this.sayName = function () {
    console.log(this.name);
  };
}
// 原型方法
Father.prototype.age = 18;
Father.prototype.sayAge = function () {
  console.log(this.age);
};

console.log('----------原型链继承----------');
function Son(name) {
  this.name = name || '->son';
}
Son.prototype = new Father();
var s = new Son('son');
console.log(s.name); // son
s.sayAge(); // 18
s.sayName(); // son
console.log(s.age); // 18
console.log(s instanceof Father); // true
console.log(s instanceof Son); // true

console.log('----------构造函数继承----------');
function Son(name) {
  Father.call(this);
  this.name = name || '->son';
}
var s = new Son('son');
console.log(s.name); // son
//s.sayAge(); // 抛出错误
s.sayName(); // son
console.log(s.age); // undefined
console.log(s instanceof Father); // false
console.log(s instanceof Son); // true

console.log('----------实例继承----------');
function Son(name) {
  var f = new Father();
  f.name = name || '->son';
  return f;
}
var s = new Son('son');
console.log(s.name); // son
s.sayAge(); // 18
s.sayName(); // son
console.log(s.age); // 18
console.log(s instanceof Father); // true
console.log(s instanceof Son); // false

console.log('----------组合继承----------');
function Son(name) {
  Father.call(this);
  this.name = name || '->son';
}
Son.prototype = new Father();
// 修复构造函数指向
Son.prototype.constructor = Son;
var s = new Son('son');
console.log(s.name); // son
s.sayAge(); // 18
s.sayName(); // son
console.log(s.age); // 18
console.log(s instanceof Father); // true
console.log(s instanceof Son); // true

console.log('----------寄生组合继承----------');
function Son(name) {
  Father.call(this);
  this.name = name || '->son';
}
(function () {
  // 创建一个没有实例方法的类
  var None = function () {};
  None.prototype = Father.prototype;
  // 将实例作为子类的原型
  Son.prototype = new None();
  // 修复构造函数指向
  Son.prototype.constructor = Son;
})();
var s = new Son('son');
console.log(s.name); // son
s.sayAge(); // 18
s.sayName(); // son
console.log(s.age); // 18
console.log(s instanceof Father); // true
console.log(s instanceof Son); // true
