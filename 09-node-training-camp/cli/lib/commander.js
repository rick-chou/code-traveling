const { program } = require('commander');
const { version } = require('./utils/constants');
const create = require('./create');
const showSign = require('./utils/sign');

module.exports = async function init() {
  const sign = await showSign();
  program.name('YepGym').description(sign).version(version);

  program
    .command('create')
    .alias('c')
    .description('create a project')
    .action(create);

  program.parse();
};
