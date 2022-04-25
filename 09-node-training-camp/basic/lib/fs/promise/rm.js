const fs = require('fs/promises');

fs.rm('./file.txt', { force: true });
fs.rm('./fileCopy.txt', { force: true });
