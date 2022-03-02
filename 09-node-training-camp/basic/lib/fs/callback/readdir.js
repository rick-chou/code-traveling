const fs = require('fs');

fs.readdir(__dirname, (err, res) => {
  console.log(res);
});

console.log(fs.readdirSync(__dirname));
