/**
 * 联合类型
 * 用 | 隔开每一个类型
 * 当访问属性或调用方法时 ts不确定该变量最后什么类型 所以只能是公共的类型或方法
 * 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
 */

function showNumber(myNumber: string | number): string | number {
  // 访问只有number拥有的属性 就会被ts⚠️
  // Property 'toFixed' does not exist on type 'string | number'.
  // Property 'toFixed' does not exist on type 'string'
  // myNumber.toFixed(3);

  return myNumber.toString(); // 只能使用string和number共有的类型
}

// 下面的例子是为我们为value设置一个左边的空格填充
// 我们对入参分别是string和number的情景进行判断
// 所以在这里我们使用string和number的联合类型
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// 可辨识联合
interface Square {
  kind: 'square';
  size: number;
}
interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}
interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius * 2;
  }
}
