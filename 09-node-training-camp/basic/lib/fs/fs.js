const fsPromise = require('fs/promises');
const fs = require('fs');

// Promise 用法
fsPromise.readdir(__dirname).then((res) => {
  console.log(res);
});

// 回调用法 ！！！错误优先
fs.readdir(__dirname, (err, res) => {
  console.log(res);
});

// 同步用法
console.log(fs.readdirSync(__dirname));
