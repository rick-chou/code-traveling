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

// 剩余参数
function add3(x: number, ...y: Array<number>) {
  return x + y.reduce((x, y) => x + y);
}
add3(1, 2, 1, 2, 3, 4);

// 默认参数
// 如果你想要默认参数生效的话 就把默认参数放在参数序列的最后一项吧
// 如下定义 就会造成歧义 编译器不知道传入一个参数的时候 到底想表达的是哪一个值
// 最终 我们如果想避免程序报错的话 就不得不乖乖的传入第二个参数 这样我们的默认参数就失效了
function add4(x: number = 2, y: number) {
  return x + y;
}
add4(3, 5);

// 可选参数
// 可选参数必须放在参数序列的最后一项
function add5(x: number, y?: number) {
  return x + y;
}

// 函数重载
function parse(x: any): any {
  if (typeof x === 'number') return x;
  if (typeof x === 'string') return x.length;
}
