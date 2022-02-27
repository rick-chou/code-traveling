# 删除属性 属性不存在 会 AttributeError
obj = {"name": "chou", "nickname": "nanshu"}
# delattr(obj, 'height')
print(obj)

# 属性不存在 KeyError
del obj['height']
