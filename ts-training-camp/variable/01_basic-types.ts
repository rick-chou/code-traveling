// boolean
let _bool: boolean;

// number
let _num: number;

// string
let _str: string;

// symbol
let _symbol: symbol;

// bigint
let _bigint: bigint;

/**
 * 默认情况下null和undefined是所有类型的子类型
 * 就是说你可以把null和undefined赋值给number类型的变量
 * 指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
 */

// undefined
let _u: undefined;

// null
let _n: null;

/**
 * never类型是任何类型的子类型，也可以赋值给任何类型
 * 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）
 * 即使any也不可以赋值给never
 */

function error(message: string): never {
  throw new Error(message);
}

// 数组
let _arr1: number[];

// 数组泛型
let _arr2: Array<number>;

// 元组
let _arr3: [number, string];
