const fs = require('fs');

fs.rename('./fileCopy.txt', 'fileCopy1.txt', (err) => {});

fs.renameSync('./fileCopy.txt', 'fileCopy1.txt');
