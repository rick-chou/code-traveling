-- 清空表
truncate table user_info;
-- delete from user_info; 

-- 单行插入
-- insert into user_info (user_nickname, user_password, user_role) values ('admin', 'admin',0);
-- insert into user_info (user_nickname, user_password, user_role) values ('chou', '0209',0);

-- 多行插入
insert into user_info (user_nickname, user_password, user_role) 
values 
('admin', 'admin',0),
('chou', '0209',0);