/**
 * Objects 可以通过 Object() 构造函数或者使用 对象字面量 的方式创建
 * 通过原型链，所有的 object 都能观察到 Object 原型对象（Object prototype object）的改变，
 * 除非这些受到改变影响的属性和方法沿着原型链被进一步的重写。
 * 尽管有潜在的危险，但这为覆盖或扩展对象的行为提供了一个非常强大的机制
 */

/**
 * 创建一个对象
 */

// 对象字面量
const obj1 = { name: 'chou' };

// 构造函数
// 如果给定的值是 null 或 undefined, 它会创建并返回一个空对象。
// 否则，它将返回一个和给定的值相对应的类型的对象。
// 如果给定值是一个已经存在的对象，则会返回这个已经存在的值（相同地址）
const obj2 = new Object(null); // {}
const obj3 = new Object(undefined); // {}
const obj4 = new Object(obj1);
console.log(obj1 === obj4); // true

/**
 * 从一个对象上删除一个属性
 * Object 自身没有提供方法删除其自身属性（Map 中的 Map.prototype.delete() 可以删除自身属性 ）
 * 为了删除对象上的属性，必须使用 delete 操作符
 */

delete obj1.name;
console.log(obj1); // {}
