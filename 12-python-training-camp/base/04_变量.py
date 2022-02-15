# Author -- Chou
# Time   -- 2022/2/4 7:26 PM

name = 'chou'
print('标识 内存地址', id(name))
print('类型', type(name))
print('值', name)

name = 'nanshu'
print('标识 内存地址', id(name))

# 解包赋值
a, b = 10, 20
print('a', a, id(a))
print('b', b, id(b))

a, b = 20, 10
print('a', a, id(a))
print('b', b, id(b))
