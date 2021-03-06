@log1
class MyClass {
  constructor() {
    this.name = 'chou';
  }
  @log2
  getName() {
    console.log(this.name);
  }
  @log2 name = 'chou';
  @log2 static age = 18;
}

/**
 *
 * @param {*} target 被修饰的类
 */
function log1(target) {
  target.prototype.logger = () => console.log(`我是${target.name}类`);
}

/**
 *
 * @param {*} target 对于静态成员来说是构造函数 对于实例成员来说是原型对象
 * @param {*} name 被修饰成员的名字
 * @param {*} descriptor 被修饰成员的属性描述符 enumerable & configurable & writable | initializer
 */
function log2(target, name, descriptor) {
  // target.log = () => console.log('log')
  console.log('target:', target);
  console.log('name:', name);
  console.log('descriptor:', descriptor);
}

const test = new MyClass();
test.logger();
