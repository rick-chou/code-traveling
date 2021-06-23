const fs = require('fs')


fs.writeFile('./note.txt', 'hello\n', (err) => {
  console.log('写入成功');
});

// 删除
fs.unlink('./note.txt', () => {
  console.log('删除成功');
});

// 追加写入
fs.appendFile('./note.txt', 'hello\n', (err) => {
  console.log('追加成功');
});

// 读取文件内容
fs.readFile('./note.txt', (err, data) => {
  console.log(data.toString());
});

// 新建文件夹
fs.mkdir('./demo', (err) => {
  console.log(err);
});

// 删除文件夹
fs.rmdir('./demo', (err) => {
  console.log('删除成功');
});

// 读取文件夹
fs.readdir('../', (err, dir) => {
  console.log(dir);
});