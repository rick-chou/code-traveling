interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person; //  --> "age" | "name"

const age: PersonKeys = 'age';
const name: PersonKeys = 'name';
// const other: PersonKeys = 'other';  // --> Type '"other"' is not assignable to type 'keyof Person'

type Point = { x: number; y: number }; // --> "x" | "y"
type P = keyof Point;

const x: P = 'x';
const y: P = 'y';
// const z: P = 'z';  // --> Type '"z"' is not assignable to type 'keyof Point'
