const log4js = require('log4js');

log4js.configure({
  appenders: {
    user: { type: 'dateFile', filename: 'user.log' },
  },
  categories: {
    default: {
      appenders: ['user'],
      level: 'debug',
    },
  },
});

const logger = log4js.getLogger('user');

logger.debug('chou');
