export interface A {
  name: string;
  age: number;
}

export interface B {
  age: number;
}

type C = Exclude<A, B>; // --> type C = never
type D = Exclude<B, A>; // --> type D = B
