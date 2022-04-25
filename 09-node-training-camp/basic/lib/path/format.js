/**
 * @docs http://nodejs.cn/api/path.html#pathformatpathobject
 * @example path.dirname(path)
 * @description 从对象返回路径字符串
 * @param {Object} pathObject
 * @pathObject
 * dir <string>
 * root <string>
 * base <string>
 * name <string>
 * ext <string>
 */

const path = require('path');

console.log(
  path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt',
  })
); // /home/user/dir/file.txt
