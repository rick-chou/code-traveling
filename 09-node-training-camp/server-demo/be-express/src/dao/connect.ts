import { Sequelize } from 'sequelize';
import figlet from 'figlet';
import chalk from 'chalk';

import { logger } from '../log';
import Config from './config';

const sequelize = new Sequelize('demo', Config.username, Config.password, {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '+08:00',
  logging: (msg) => logger('user').debug(msg),
  logQueryParameters: true,
});

(async () => {
  try {
    await sequelize.authenticate();

    figlet.text(
      'Connect',
      {
        font: 'Larry 3D',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true,
      },
      (err, data) => {
        if (!err) console.log(chalk.yellow(data));
      }
    );
  } catch (error) {
    console.error(chalk.red('Unable to connect to the database:', error));
  }
})();

export default sequelize;
