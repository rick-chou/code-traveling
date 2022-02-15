# Author -- Chou
# Time   -- 2022/2/4 10:30 PM

ls1 = ['hello', 'chou', 209, 710, 117]

ls2 = list(['hello', 'chou', 209])
print(ls2)

print(ls1.index('chou'))

print(ls1[1])
print(ls1[-2])

# 切片 start: stop: step
# [start, stop)

ls3 = ls1[2:len(ls1)]
print(ls3)

print(ls1[::-1])

# 不会产生新的列表 会删除原来索引为1的元素
ls1[1:2] = []

# 新增元素
[1, 2, 3].append(100)

# extent 一次性添加多个元素
[1, 2, 3].extend([99, 100])

# 在任意索引处插入元素
[1, 2, 3].insert(1, 100)

# 移除元素 （多个元素 只会移除第一个）
[1, 2, 3].remove(3)

# 根据索引移除元素
# 不指定参数 将会删除最后一个元素
[1, 2, 4].pop(1)

# 请空列表
ls1.clear()

# 删除列表
del ls1

# 排序 不会产生新的列表
[1, 2, 4].sort(reverse=False)

# 排序 产生一个新的列表
newLs = sorted([1, 2, 4])

# 列表生成式
newLs2 = [i for i in range(1, 10)]
