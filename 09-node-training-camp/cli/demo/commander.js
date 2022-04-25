const { program } = require('commander');

program
  .name('chou-cli')
  .description('description description description ......')
  .version('7.1.0');

program
  .command('create')
  .alias('c')
  .description('create a project')
  .action(() => {
    console.log('create......');
    console.log(process.argv);
  });

program.parse();
