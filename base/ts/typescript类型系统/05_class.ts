/**
 * 类继承接口
 * public
 * private
 * protected
 * getters/setters
 * static
 * abstract
 */

// 类继承接口
interface IPerson {
  readonly name: string;
}

class Person implements IPerson {
  // 公开 和不加修饰符 效果一样 表示在任意位置都可以访问
  public nickname: string;
  // 只读 只能读取 不能赋值
  readonly name: string = '花匠';
  // 受保护的 protected成员在派生类中仍然可以访问
  protected gender: string;
  // 私有 不能在声明它的类的外部访问
  private _age: number;
  constructor(nickname: string, gender: string, age: number) {
    this.nickname = nickname;
    this.gender = gender;
    this._age = age;
  }
  static sayHi() {
    console.log(this.name);
  }
  // getters/setters 存取器件
  set age(age: number) {
    this._age = age;
  }
  get age(): number {
    return this._age;
  }
}

const person = new Person('nanshu', 'man', 18);
person.name;
person.nickname;

// person.gender;  Property 'gender' is protected and only accessible within class 'Person' and its subclasses.
// stu.age;  Property 'age' is private and only accessible within class 'Student'

class Student extends Person {
  constructor(nickname: string, gender: string, age: number) {
    super(nickname, gender, age);
    // super.age; Property 'age' is private and only accessible within class 'Person'.
    super.name;
    super.nickname;
    super.gender;
  }
}

// 抽象类可以包含成员的实现细节 并且可以包含访问修饰符
abstract class Animal {
  constructor(public name: string) {
    this.name = name;
  }
  abstract makeSound(): void;
  move(): void {
    console.log('moving...');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('make sound');
  }
}

const dog = new Dog('小花');
dog.name; // 小花
dog.move(); // moving
dog.move(); // make sound

// 类当作接口使用
class Point {
  x: number;
  y: number;
}
const pointA: Point = { x: 7, y: 10 };

interface Point3D extends Point {
  z: number;
}

const pointB: Point3D = { x: 7, y: 1, z: 10 };
