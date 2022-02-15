# Author -- Chou
# Time   -- 2022/2/6 4:03 PM

# 无序

set1 = {1, 1, 1, 1, 2}
set2 = set({1, 2, 3, 3})
print(set1)
print(set2)

print(10 in set1)
print(1 not in set1)

# 新增元素 一次添加一个
set1.add(3)

# 新增元素 一次可以添加多个
set1.update({10, 20, 30})
print(set1)
set1.update([3, 4, 5])
print(set1)

# 删除元素 元素不存在 会报异常
# set1.remove(300)

# 删除元素 元素不存在 不会报异常
set1.discard(50)

# 随机删除一个元素
set1.pop()

# 清空集合
set1.clear()

# 一个集合是否是另一个集合的子集
print({1, 2}.issubset({1, 2, 3}))

print({1, 2, 3}.issuperset({1, 2}))

print({1, 2, 3}.isdisjoint({1, 2}))

# 集合的数学运算
setA = {1, 2, 3, 4}
setB = {1, 2, 5, 6}

# 交集
print(setA.intersection(setB))
print(setA & setB)

# 并集
print(setA.union(setB))
print(setA | setB)

# 差集
print(setA.difference(setB))
print(setA - setB)

# 对称差集
print(setA.symmetric_difference(setB))
print(setA ^ setB)

# 集合生成式
print({i for i in range(10)})

