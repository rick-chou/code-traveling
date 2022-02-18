const { program } = require('commander');
const { version } = require('./constants');

require('./utils/request');

// console.log(process.argv);

// console.log(program.parse(process.argv));

// program.version(version);

// program
//   .command('create')
//   .alias('c')
//   .description('create a project')
//   .action(() => {
//     console.log('create......');
//   });

// program.parse();

// program.version('1.0.0').parse(process.argv);
