const boxen = require('boxen');

console.log(boxen('Hello Chou !', { padding: 1 }));

console.log(
  boxen('Hello Chou !', { padding: 1, margin: 1, borderStyle: 'double' })
);

console.log(
  boxen('Chou !', {
    title: 'Hello',
    titleAlignment: 'center',
    padding: 1,
  })
);
