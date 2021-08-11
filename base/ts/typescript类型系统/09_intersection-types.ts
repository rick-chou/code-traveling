/**
 * 交叉类型
 * 可以把现有的多种类型叠加到一起成为一种类型
 * 它包含了所需的所有类型的特性
 */
interface Props1 {
  className: string;
}

interface Props2 {
  onClick: () => void;
}

const props: Props1 & Props2 = {
  onClick: () => {},
  className: 'nanshu-btn',
};

// 泛型也可以使用 &
function mixin<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}
