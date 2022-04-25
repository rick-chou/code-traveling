# list tuple range

_list = [1, 2, 3, 4, 5]
_tuple = (1, 2, 3, 4, 5)
_range = range(10)

# 运算
# in / not in
print(1 in _list)
print(1 in _tuple)
print(1 in _range)

# s[i] s的第几项
print(_list[0])
print(_tuple[0])
print(_range[0])

# s[i:j] s从i到j的切片 不包含j
print(_list[1:3])
print(_tuple[1:3])
print(_range[1:3])

# s[i:j:k] s从i到j的切片 不包含j 步长为k
print(_list[1:3:2])
print(_tuple[1:3:2])
print(_range[1:3:2])

# len(s) 长度 元素的个数
print(len(_list))
print(len(_tuple))
print(len(_range))

# min(s)

# max(s)

# s.index(x[, i[, j]]) x 在 s 中首次出现的索引

# s.count(x) x 在 s 中出现的总次数
print(_list.count(1))
print(_tuple.count(1))
print(_range.count(1))


# clear 清空

# copy 浅拷贝

# del 删除元素
del _list[0]


# 可变序列 / 不可变序列

# 可变序列
# list
_list[0] = 1

# 不可变序列
# tuple
# TypeError: 'tuple' object does not support item assignment
# _tuple[0] = 1
