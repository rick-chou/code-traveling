# <
# <=
# >
# >=
# ==
# !=
# is
# is not


a = {"name": "chou"}
b = {"name": "chou"}

print(id(a))
print(id(b))

print(a == b)  # 内容比较
print(a is b)  # 地址比较
print(a is not b)  # 地址比较
