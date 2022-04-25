const pool = require('./connect');

// 增
pool.query(
  `insert into user_info (user_nickname, user_password, user_role) values ('nanshu', '710', 0)`,
  (err, result) => {
    console.log(result);
  }
);

// 删
pool.query(
  `delete from user_info where user_nickname = chou;`,
  (err, result) => {
    console.log(result);
  }
);

// 改
pool.query(
  `update user_info set user_nickname = 'nanshu' where user_nickname = 'chou'; `,
  (err, result) => {
    console.log(result);
  }
);

// 查
pool.query('select * from user_info', (err, result) => {
  console.log(result);
});
