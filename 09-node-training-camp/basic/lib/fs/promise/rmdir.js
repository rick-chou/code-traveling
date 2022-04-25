const fs = require('fs/promises');

fs.rmdir('./dist')
  .catch((err) => console.log(err))
  .then((res) => console.log(res));
