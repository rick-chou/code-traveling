const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'szrk0209', {
  host: 'localhost',
  dialect: 'mysql',
});

const UserInfo = sequelize.define(
  'user_info',
  {
    // 在这里定义模型属性
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_role: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    // 这是其他模型参数
  }
);

// `sequelize.define` 会返回模型
console.log(UserInfo === sequelize.models.UserInfo); // true

/**
 * sync() - 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
 * sync({ force: true }) - 将创建表,如果表已经存在,则将其首先删除
 * sync({ alter: true }) - 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
 *
 * 可以使用 sequelize.sync() 自动同步所有模型
 */

(async () => {
  await UserInfo.sync({ force: true });

  // 增
  await UserInfo.create({
    user_nickname: 'chou',
    user_password: '209',
  });

  // 删
  await UserInfo.destroy({
    where: {
      user_nickname: 'chou',
    },
  });

  // 改
  await UserInfo.update(
    {
      user_role: 1,
    },
    {
      where: {
        user_id: 0,
      },
    }
  );

  // 查
  await UserInfo.findAll();
  // SELECT
  // 只筛选某些属性
  await UserInfo.findAll({
    attributes: ['user_nickname'],
  });
  // 排除某些属性
  await UserInfo.findAll({
    attributes: {
      exclude: ['user_role'],
    },
  });

  // WHERE
  // 没有指定Op 默认是 eq
  await UserInfo.findAll({
    where: {
      user_nickname: 'chou',
    },
  });
  // 等价于
  await UserInfo.findAll({
    where: {
      user_nickname: {
        [Op.eq]: 'chou',
      },
    },
  });
  // 多个查询条件时 Op 默认是 and
  await UserInfo.findAll({
    where: {
      user_nickname: 'chou',
      user_role: 0,
    },
  });
  // 等价于
  await UserInfo.findAll({
    where: {
      [Op.and]: {
        user_nickname: 'chou',
        user_role: 0,
      },
    },
  });
  // 使用 or
  await UserInfo.findAll({
    where: {
      [Op.or]: {
        user_nickname: 'chou',
        user_role: 0,
      },
    },
  });

  /**
   * Op
   * @link https://www.sequelize.com.cn/core-concepts/model-querying-basics#%E6%93%8D%E4%BD%9C%E7%AC%A6
   */

  // 排序
  await UserInfo.findAll({
    order: [['user_id', 'DESC']],
  });
  await UserInfo.findAll({
    order: sequelize.literal('max(user_id) DESC'),
  });

  // 限制和分页
  await UserInfo.findAll({
    limit: 10,
  });
  await UserInfo.findAll({
    offset: 10,
  });
  await UserInfo.findAll({
    offset: 10,
    limit: 10,
  });
})();
