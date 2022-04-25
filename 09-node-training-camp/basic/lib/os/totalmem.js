/**
 * 以整数形式返回系统内存总量（以字节为单位
 */

const os = require('os');

console.log(os.totalmem() / 1024 / 1024 / 1024);
