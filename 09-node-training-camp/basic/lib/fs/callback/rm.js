const fs = require('fs');

fs.rm('./file.txt', { force: true }, (err) => {});
fs.rmSync('./fileCopy.txt', { force: true });
