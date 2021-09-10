export interface A {
  name: string;
  age: number;
}

export interface B {
  age: number;
}

type C = Extract<A, B>; // --> type C = A
type D = Extract<B, A>; // --> type D = never
