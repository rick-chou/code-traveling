/**
 * 以秒为单位返回系统正常运行时间
 */

const os = require('os');

console.log(os.uptime() / 60 / 60);
