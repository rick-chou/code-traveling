interface A {
  name: string;
}

interface B {
  name: string;
  age: number;
}

type C = Pick<B, keyof A>;
