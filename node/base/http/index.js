const http = require('http')
const server = http.createServer((req, res) => {
  console.log(req)
  res.end('hello')
})

server.listen(3000, () => {
  console.log('服务器启动成功')
})