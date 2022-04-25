/**
 * 以字符串形式返回操作系统默认的临时文件的目录
 */

const os = require('os');

console.log(os.tmpdir());
