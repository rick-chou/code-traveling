import log4js from 'log4js';

type LogCate = 'user' | 'error';

log4js.configure({
  appenders: {
    cheese: { type: 'dateFile', filename: 'log/cheese.log' },
    userLog: { type: 'dateFile', filename: 'log/user.log' },
    errLog: { type: 'dateFile', filename: 'log/error.log' },
  },
  categories: {
    user: { appenders: ['userLog'], level: 'debug' },
    error: { appenders: ['errLog'], level: 'debug' },
    default: { appenders: ['cheese'], level: 'debug' },
  },
});

export const logger = (category: LogCate) => log4js.getLogger(category);
