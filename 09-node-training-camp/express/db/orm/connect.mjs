// const { Sequelize } = require('sequelize');
import { Sequelize } from 'sequelize';

// 连接
const sequelize = new Sequelize('test', 'root', 'szrk0209', {
  host: 'localhost',
  dialect: 'mysql',
});

// 测试连接
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
