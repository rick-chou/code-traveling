const Metalsmith = require('metalsmith');
const path = require('path');

console.log(path.resolve(__dirname));

// Metalsmith('demo/metalsmith.js')
//   .use((files, meta) => {
//     console.log(files, meta);
//   })
//   .build((err) => {
//     if (err) throw err;
//     console.log('Build finished!');
//   });
