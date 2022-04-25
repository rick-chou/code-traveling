/**
 * @example path.basename(path[, ext])
 * @description 返回 path 的最后一部分
 * @param {string} path
 * @param {string} ext
 * @returns {string}
 */

const path = require('path');

console.log(path.basename('basename.js')); // basename.js
console.log(path.basename('basename.js', '.js')); // basename
console.log(path.basename('basic/lib/path/basename.js', '.js')); // basename
