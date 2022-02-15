# Author -- Chou
# Time   -- 2022/2/10 20:13

a = 'chou'
b = "chou"
c = '''chou'''
print(a, id(a))
print(b, id(b))
print(c, id(c))

str1 = 'chou,chou'

# 查找
# index 第一次出现的位置 查找的字串不存在时 抛异常
# rindex 最后一次出现的位置 查找的字串不存在时 抛异常
# find 第一次出现的位置 查找的字串不存在时 不抛异常 返回-1
# rfind 最后一次出现的位置 查找的字串不存在时 不抛异常 返回-1
print('index:', str1.find('ou'))
print('rindex:', str1.rindex('ou'))
print('find:', str1.find('ou'))
print('rfind:', str1.rfind('ou'))

# upper
print('upper:', 'chou'.upper())

# lower
print('lower:', 'chou'.lower())

# swapcase 大小写互换
print('swapcase:', 'Chou'.swapcase())

# capitalize 第一个字符大写
print('capitalize:', 'chou'.capitalize())

# title 每个单词首字母大写
print('title:', 'I am Chou'.title())

# center 居中对齐
print('chou'.center(20, '#'))

# ljust 左对齐
print('chou'.ljust(20, '#'))

# rjust 右对齐
print('chou'.rjust(20, '#'))

# zfill 右对齐 左边用0填充
print('chou'.zfill(20))

# split 左侧分割
# rsplit 右侧分割
print('CHOU'.split('H'))
print('chou,chou'.split(sep='c', maxsplit=1))

# 判断
print('CHOU'.isidentifier())
print('CHOU'.isalnum())
print('CHOU'.isalpha())
print('CHOU'.isdecimal())
print('CHOU'.isdigit())

# 替换
print('CHOU,CHOU,CHOU'.replace('CHOU', 'NANSHU'))
print('CHOU,CHOU,CHOU'.replace('CHOU', 'NANSHU', 1))

print('#'.join(('1', '2', '3')))

# 比较
print('chou' > 'ch')
print(chr(97))  # a

# 切片
print('CHOU'[1:2])

# 格式化字符串

name = 'chou'
age = 18
print('I am %s, %d year old' % (name, age))
print('I am {0}, {1} year old'.format(name, age))
print(f'I am {name}, {age} year old')
