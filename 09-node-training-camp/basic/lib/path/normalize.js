/**
 * http://nodejs.cn/api/path.html#pathnormalizepath
 */

const path = require('path');

path.normalize('/foo/bar//baz/asdf/quux/..'); // '/foo/bar/baz/asdf'
