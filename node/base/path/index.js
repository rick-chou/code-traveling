const path = require('path')
console.log(__dirname)
console.log(__filename)

console.log(path.extname(__filename))

console.log(path.join(__dirname, '/index.js'))