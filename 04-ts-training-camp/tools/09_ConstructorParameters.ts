class A {
  private name;
  private age;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

type B = ConstructorParameters<typeof A>;
