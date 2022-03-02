/**
 * @example path.dirname(path)
 * @description 返回 path 的目录名
 * @param {string} path
 * @returns {string}
 */

const path = require('path');

console.log(path.dirname('a/b/c')); // a/b
console.log(path.dirname('a/b/c.js')); // a/b
