export type Person = { age: number; name: string; alive: boolean };
export type Age = Person['age'];

type I1 = Person['age' | 'name'];

type I2 = Person[keyof Person];

type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];
