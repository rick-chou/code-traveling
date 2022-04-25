use test;

-- 删除表
drop table user_info;

-- 创建一张 user_info 表
create table if not exists user_info (
  user_id int primary key auto_increment,
  user_nickname varchar(255) not null,
  user_password varchar(255) not null,
  user_role int not null
);


-- 显示所有表
show tables;

-- +----------------+
-- | Tables_in_test |
-- +----------------+
-- | user_info      |
-- +----------------+

-- 显示表结构
describe user_info;
-- +---------------+--------------+------+-----+---------+----------------+
-- | Field         | Type         | Null | Key | Default | Extra          |
-- +---------------+--------------+------+-----+---------+----------------+
-- | user_id       | int          | NO   | PRI | NULL    | auto_increment |
-- | user_nickname | varchar(255) | NO   |     | NULL    |                |
-- | user_password | varchar(255) | NO   |     | NULL    |                |
-- | user_role     | int          | NO   |     | NULL    |                |
-- +---------------+--------------+------+-----+---------+----------------+