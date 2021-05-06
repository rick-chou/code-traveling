/**
 * 类装饰器
 */

@log
class MyClass {}

function log(target) {
  // 这个 target 在这里就是 MyClass 这个类
  target.prototype.logger = () => console.log(`${target.name}被调用`)
}

const test = new MyClass()
test.logger() // MyClass 被调用
