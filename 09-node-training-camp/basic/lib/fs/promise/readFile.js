const fs = require('fs/promises');

fs.readFile('./file.txt', 'utf-8').then((res) => {
  console.log(res);
});
