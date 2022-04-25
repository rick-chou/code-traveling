const fs = require('fs/promises');

fs.readdir(__dirname).then((res) => {
  console.log(res);
});
