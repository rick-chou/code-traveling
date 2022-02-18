const figlet = require('figlet');
const chalk = require('chalk');

const showSign = () => {
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
};

module.exports = {
  showSign,
};
