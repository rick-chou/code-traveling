const figlet = require('figlet');
const chalk = require('chalk');

/**
 * @description show YepGym
 */
module.exports = function showSign() {
  return new Promise((resolve, reject) => {
    figlet.text(
      'YepGym!',
      {
        font: 'Larry 3D',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true,
      },
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(chalk.blueBright(data));
      }
    );
  });
};
