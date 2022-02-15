# Author -- Chou
# Time   -- 2022/2/4 12:18 AM

# 直接输出数字
print(123)

# 输出字符
print('hello')

# 操作符会直接进行运算
print(1 + 2)

# 输出到文件
# a+ 追加写入
fp = open('./test.txt', 'a+')
print('hello py', file=fp)
fp.close()

# 不换行输出
print(1, 2, 3)
