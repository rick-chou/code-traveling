# dict

_dict = {
    "name": "chou",
    "age": 18,
    "height": 190
}

# list 返回所有键
print(list(_dict))  # ['name', 'age', 'height']

# keys
print(_dict.keys())  # dict_keys(['name', 'age', 'height'])

# values
# dict_values(['chou', 18, 190])
print(_dict.values())

# items
# dict_items([('name', 'chou'), ('age', 18), ('height', 190)])
print(_dict.items())

# len

# d[key] key不存在 KeyError
# print(_dict["a"])

# del d[key] key不存在 KeyError
# pop key不存在 不会引发 KeyError

# in / not in

# clear

# get
print(_dict.get('nickname', 'nanshu'))

# reversed
print(reversed(_dict))

# d | other 合并 other优先
print(_dict | {"bir": 710})

# d |= other 覆盖
_dict |= {"name": "nanshu"}
print(_dict)


# 字典视图对象
# keys / values / items
# 该对象提供字典条目的一个动态视图，这意味着当字典改变时，视图也会相应改变
