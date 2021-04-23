// const flag = true;

// const myPromise = new Promise((resolve, reject) => {
//   if (flag) {
//     resolve('hello promise');
//   } else {
//     resolve('bye promise');
//   }
// });

// myPromise.then((res) => console.log(res)).catch((res) => console.log(res));

const promise1 = Promise.reject(new Error('fail'))
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));
const promise2 = Promise.resolve('yeah');

// Promise.all([promise1, promise2]).then((res) => console.log(res));
// Promise.any([promise1, promise2]).then((res) => console.log(res));
// Promise.allSettled([promise1, promise2]).then((res) => console.log(res));
// Promise.race([promise1, promise2]).then((res) => console.log(res));