export interface A {
  name: string;
  age: number;
}

export interface B {
  age: number;
}

type C = Exclude<B, A>;
