/**
 * Named Function
 * Anonymous function
 * 可选参数
 * 默认参数
 * 剩余参数
 * 为函数定义类型
 * 重载
 */

type Add = (x: number, y: number) => number;

function add1(x: number, y: number): number {
  return x + y;
}

const add2: Add = function (x: number, y: number): number {
  return x + y;
};

// 默认参数 可选参数 剩余参数
function add3(x: number = 2, y?: number, ...z: Array<number>) {
  return z.reduce((x, y) => x + y) + x + y;
}

add3(1, 2, 1, 2, 3, 4);

// 函数重载
function parse(x: any): any {
  if (typeof x === 'number') return x;
  if (typeof x === 'string') return x.length;
}
