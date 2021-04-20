const flag = true;

const myPromise = new Promise((resolve, reject) => {
  if (flag) {
    resolve('hello promise');
  } else {
    resolve('bye promise');
  }
});

myPromise.then((res) => console.log(res)).catch((res) => console.log(res));
