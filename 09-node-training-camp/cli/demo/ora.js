const ora = require('ora');

const spinner = ora('Fetching...');

spinner.start();

setTimeout(() => {
  spinner.succeed('success');
}, 2000);
