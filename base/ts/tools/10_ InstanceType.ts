class A {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

type B = InstanceType<typeof A>;

const obj: B = {
  name: 'nanshu',
  age: 18,
};
