str1 = 'chou'
str2 = "chou"
# 三引号可以换行
str3 = """
  chou
"""

print(str1)
print(str2)
print(str3)

# 方法
# capitalize 首字母大写

# casefold 全小写
print('Chou'.casefold())

# center
print('chou'.center(20, '#'))

# count 统计自串出现的次数
print('chouchou'.count('c'))

# encode
print('你好'.encode(encoding='gb2312'))

# str.endswith(suffix[, start[, end]])

# str.find(sub[, start[, end]])
# 同下index

# str.index(sub[, start[, end]])
# 没找到会 ValueError

# format
print('a = {0}, b = {1}'.format(1, 2))

# isalnum 都是字母或数字
print('chou#'.isalnum())

# isalpha 都是字母

# isdecimal 都是十进制字符

# isdigit 都是数字

# islower

# isnumeric

# istitle
print('Chou'.istitle())

# join
print('#'.join('chou'))

# ljust
print('chou'.ljust(20, '#'))

# rjust

# lower

# removeprefix 移除前缀
print('TestHook'.removeprefix('Test'))
print('BaseTestCase'.removeprefix('Test'))

# removesuffix 移除后缀

# replace(old, new[, count])

# rfind(sub[, start[, end]])

# rindex(sub[, start[, end]])

print('hello#chou'.split('#'))

# startswith

# title

# upper

# zfill
print('1'.zfill(10))
