function fn1(next) {
  console.log('fn1');
  next();
  console.log('end fn1');
}

function fn2(next) {
  console.log('fn2');
  next();
  console.log('end fn2');
}

function fn3(next) {
  console.log('fn3');
  next();
  console.log('end fn3');
}

function fn4(next) {
  console.log('fn4');
  next();
  console.log('end fn4');
}

// function compose(funs) {
//   // 返回的 composed， 必然是一个参数为 num 的函数
//   return num => funs.reduce((previous, current) => current(previous), num);
// }

// let oNext = () => console.log('oNext called');
// let composed = oNext => fn1(() => fn2(() => fn3(() => fn4(oNext))));
// composed(oNext);

let oNext = () => console.log('oNext called');
function compose(funs) {
  return oNext => funs.reduceRight((previous, current) => () => current(previous), oNext)();
}

let composed = compose([fn1, fn2, fn3, fn4]);
composed(oNext);
