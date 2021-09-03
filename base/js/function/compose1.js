function fn1(num) {
  console.log('fn1', num);
  return num;
}

function fn2(num) {
  console.log('fn2', num);
  return num;
}

function fn3(num) {
  console.log('fn3', num);
  return num;
}

function fn4(num) {
  console.log('fn4', num);
  return num;
}

// fn1(1);
// fn2(1);
// fn3(1);
// fn4(1);

// let composed = num => fn4(fn3(fn2(fn1(num))));
// composed(1);

// /**
//  *
//  * @param funs 函数列表，例：[fn1, fn2, fn3, fn4]
//  * @returns composed 函数，例：(num) => fn4(fn3(fn2(fn1(num))))
//  */
// function compose(funs) {
//   // 返回的 composed， 必然是一个参数为 num 的函数
//   return num => {
//     let length = funs.length;

//     // 当前的参数，初次的参数是 num
//     let ret = num;

//     // fn4(fn3(fn2(fn1(num)))
//     for (let i = 0; i < length; i++) {
//       let fn = funs[i];
//       ret = fn(ret);
//     }
//   };
// }

// let composed = compose([fn1, fn2, fn3, fn4]);
// composed(1);

function compose(funs) {
  // 返回的 composed， 必然是一个参数为 num 的函数
  return num => funs.reduce((previous, current) => current(previous), num);
}

let composed = compose([fn1, fn2, fn3, fn4]);
composed(1);
