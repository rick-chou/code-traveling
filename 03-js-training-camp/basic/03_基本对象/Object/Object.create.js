/**
 * @example Object.create(proto，[propertiesObject])
 * @description 方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
 * @returns {Object} new obj
 */

const Student = function () {};

Student.prototype.sayHi = () => {
  console.log('hello teacher');
};

const ply = Object.create(Student.prototype, {});
ply.sayHi(); // hello teacher

console.log(ply === Student.prototype); // false
