const { program } = require('commander');
const { version } = require('./constants');

// console.log(process.argv);

// console.log(program.parse(process.argv));

program.version(version);

program
  .command('create')
  .alias('c')
  .description('create a project')
  .action(() => {
    console.log('create......');
  });

program.option('--first').option('-s, --separator <char>');

const mapActions = {
  create: {
    alias: 'c',
    description: 'create a project',
    examples: ['chou-cli c <project-name>'],
  },
  config: {
    alias: 'conf',
    description: 'config a project',
    examples: [
      'chou-cli config set <key> <value>',
      'chou-cli config get <key>',
    ],
  },
  '*': {
    description: 'command not found',
  },
};

program.parse();

// program.version('1.0.0').parse(process.argv);
