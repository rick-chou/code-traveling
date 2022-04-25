/**
 * 获取对象类型的key 返回一个联合类型
 */

/**
 * eg1
 */
interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person; //  --> "age" | "name"

const age: PersonKeys = 'age';
const username: PersonKeys = 'name';
// const other: PersonKeys = 'other';  // --> Type '"other"' is not assignable to type 'keyof Person'

/**
 * eg2
 */
type Point = { x: number; y: number }; // --> "x" | "y"
type P = keyof Point;

const x: P = 'x';
const y: P = 'y';
// const z: P = 'z';  // --> Type '"z"' is not assignable to type 'keyof Point'
