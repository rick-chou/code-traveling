/**
 * 以整数形式返回空闲的系统内存量（以字节为单位
 */

const os = require('os');

console.log(os.freemem());
