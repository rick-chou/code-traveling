const rm = require('rimraf').sync;
const fs = require('fs').promises;

fs.mkdir('./test').then(() => {
  setTimeout(() => {
    fs.rmdir('./test');
    // rm('./test');
  }, 3000);
});
