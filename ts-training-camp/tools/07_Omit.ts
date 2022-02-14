export interface A {
  name: string;
  age: number;
}

type B = Omit<A, string>;
