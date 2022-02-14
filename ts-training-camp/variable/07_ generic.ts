// 泛型函数
function echo<T>(arg: T): T {
  return arg;
}

// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

// 泛型约束

function loggingIdentity1<T>(arg: T): T {
  // console.log(arg.length);  Property 'length' does not exist on type 'T'.
  return arg;
}

interface Lengthwise {
  length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
