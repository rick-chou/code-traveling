/**
 * path.relative(from, to)
 * 根据当前工作目录返回从 from 到 to 的相对路径
 */

const path = require('path');

path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// 返回: '../../impl/bbb'
