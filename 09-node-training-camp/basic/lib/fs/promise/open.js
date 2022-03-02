const fs = require('fs/promises');

// TODO buffer
fs.writeFile('./test.txt', 'hello').then(async () => {
  const file = await fs.open('./test.txt');
  file.read().then((res) => console.log(Buffer.toString(res)));
});
