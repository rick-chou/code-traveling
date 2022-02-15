export interface Person {
  name: string;
  age: number;
}

export interface Player extends Person {
  item: 'ball' | 'swing';
}

const p1: Player = {
  name: 'nanshu',
  age: 18,
  item: 'ball',
};

type IsPerson<T> = T extends Person ? Person : T;

const p2: IsPerson<{ name: string }> = { name: 'nanshu' };
