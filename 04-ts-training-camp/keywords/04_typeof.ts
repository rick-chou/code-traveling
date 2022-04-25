/**
 * 类型推断
 */

let s = 'hello';
type t = typeof s;

let stu = {
  name: 'chou',
  age: 18,
};

type Stu = typeof stu;
