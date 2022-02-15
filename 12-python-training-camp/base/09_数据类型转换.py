# Author -- Chou
# Time   -- 2022/2/4 7:58 PM

# str() 转成string
# int() 转成integer
# float() 转成float

name = 'chou'
age = 18
print('I am ' + name + ', ' + str(age) + ' year old')

print(int(3.14))  # 取整 舍去小数部分
print(int('3'))
# print(int('3.14')) 会报错 有小数
# print(int('chou')) 会报错 非数字

print(float(2))  # 会在结尾加上.0
print(float('2'))
# print(float('chou')) 会报错 非数字
