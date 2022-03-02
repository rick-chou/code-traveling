const fs = require('fs');

fs.writeFile('./file.txt', 'hello', (err) => {});

fs.writeFileSync('./file.txt', 'hello');
