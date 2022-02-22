# Author -- Chou
# Time   -- 2022/2/5 7:41 PM

obj1 = {
    'name': 'chou',
    'age': 18
}

obj2 = dict(name='chou', age=18)

print(obj1)
print(obj2)

print(obj1['name'])
print(obj1.get('name'))
print(obj1.get('username'))  # None
print(obj1.get('username', 'nanshu'))  # nanshu

# 清空字典
obj1.clear()
print(obj1)

# 修改元素
obj1['name'] = 'nanshu'

# 获取所有的key
obj1.keys()

# 获取所有的value
obj1.values()

# 键值对
obj1.items()

# 遍历
for item in obj1:
    print('遍历', item)

# 注意
# key不能重复 value可以重复
# 元素是无序的

# 字典生成式
ls1 = ['name', 'age', 'height']
ls2 = ['chou', 18, 180]
obj = {key: value for key, value in zip(ls1, ls2)}
print(obj)
