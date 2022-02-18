const figlet = require('figlet');
const chalk = require('chalk');

figlet.text(
  'Chou!',
  {
    font: 'Larry 3D',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true,
  },
  (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(chalk.blueBright(data));
  }
);

figlet.text(
  'Chou!',
  {
    font: 'Isometric2',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true,
  },
  (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(chalk.blueBright(data));
  }
);
