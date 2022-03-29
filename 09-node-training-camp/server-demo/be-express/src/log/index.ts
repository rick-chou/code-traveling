import log4js from 'log4js';

type LogCate = 'user';

log4js.configure({
  appenders: {
    cheese: { type: 'dateFile', filename: 'log/cheese.log' },
    userLog: { type: 'dateFile', filename: 'log/user.log' },
  },
  categories: {
    user: { appenders: ['userLog'], level: 'debug' },
    default: { appenders: ['cheese'], level: 'debug' },
  },
});

export const logger = (category: LogCate) => log4js.getLogger(category);
