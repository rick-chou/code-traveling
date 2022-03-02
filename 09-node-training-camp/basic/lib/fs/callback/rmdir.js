const fs = require('fs');

fs.rmdir('./dist', (err) => {});

fs.rmdirSync('./dist');
