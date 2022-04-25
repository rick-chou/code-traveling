/**
 * http://nodejs.cn/api/os.html#osuserinfooptions
 */

const os = require('os');

console.log(os.userInfo());

// Mac
// {
//   uid: 501,
//   gid: 20,
//   username: 'zhourunkai',
//   homedir: '/Users/zhourunkai',
//   shell: '/bin/zsh'
// }
