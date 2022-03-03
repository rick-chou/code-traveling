// 主要用来匹配文件路径
var glob = require('glob');

const files = glob.sync('dist/*.js');
console.log(files);
