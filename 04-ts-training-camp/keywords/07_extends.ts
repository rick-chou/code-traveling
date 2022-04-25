interface IPerson {
  name: string;
  age: number;
}

// 接口继承
interface Player extends IPerson {
  item: 'ball' | 'swing';
}

const p1: Player = {
  name: 'nanshu',
  age: 18,
  item: 'ball',
};

// 条件判断
type IPlayer<T> = T extends IPerson ? T : IPerson;

const p2: IPlayer<{ name: string }> = { name: 'nanshu', age: 18 };

type TPerson = {
  name: string;
  age: number;
};

interface TPlayer extends TPerson {
  item: 'ball' | 'swing';
}

const p3: TPlayer = {
  name: 'nanshu',
  age: 18,
  item: 'ball',
};

/**
 * type 可以声明基础数据类型
 * interface 可以声明合并 / 可以继承
 */
