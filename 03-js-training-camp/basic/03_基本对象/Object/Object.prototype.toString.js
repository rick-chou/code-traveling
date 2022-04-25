/**
 * @example obj.toString()
 * @description 表示该对象的字符串
 */

// 检测数据类型

const _typeof = (target) =>
  Object.prototype.toString.call(target).slice(8, -1).toLowerCase();

console.log(_typeof({})); // object
console.log(_typeof([])); // array
console.log(_typeof(() => {})); // function
