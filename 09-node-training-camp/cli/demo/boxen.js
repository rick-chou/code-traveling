const boxen = require('boxen');
const chalk = require('chalk');

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

const upgradeMessage = `New version available ${chalk.magenta(
  '4.5.13'
)} → ${chalk.green('5.0.1')} \nRun ${chalk.yellow(
  'yarn global add @vue/cli'
)} to update!`;

console.log(
  boxen(upgradeMessage, {
    align: 'center',
    borderColor: 'green',
    dimBorder: true,
    padding: 1,
  })
);
