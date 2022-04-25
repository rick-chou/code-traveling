const fs = require('fs');

fs.readFile('./file.txt', { encoding: 'utf-8' }, (err, res) => {
  console.log(res);
});

console.log(fs.readFileSync('./file.txt', { encoding: 'utf-8' }));
