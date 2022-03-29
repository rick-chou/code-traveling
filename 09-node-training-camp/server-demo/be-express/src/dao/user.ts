/**
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int          | NO   | PRI | NULL    | auto_increment |
| nickname  | varchar(255) | NO   |     | NULL    |                |
| password  | varchar(255) | NO   |     | NULL    |                |
| status    | tinyint(1)   | YES  |     | 0       |                |
| address   | varchar(255) | YES  |     | NULL    |                |
| tel       | varchar(255) | YES  |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
 */

import { DataTypes } from 'sequelize';
import sequelize from './connect';

const UserInfo = sequelize.define('user_info', {
  // 在这里定义模型属性
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  address: {
    type: DataTypes.STRING,
  },
  tel: {
    type: DataTypes.STRING,
  },
});

// UserInfo.sync({ force: true });
UserInfo.sync();

export default UserInfo;
