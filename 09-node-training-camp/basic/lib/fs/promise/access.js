const fs = require('fs/promises');

fs.access('./test.txt')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
