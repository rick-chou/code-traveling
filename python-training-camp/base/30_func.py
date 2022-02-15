# Author -- Chou
# Time   -- 2022/2/14 10:10 PM

# 函数声明
def add(a, b):
    return a + b


# 位置参数
def fun1(*args):
    return args


# 关键字参数
def fun2(**args):
    return args


# 关键字参数要在位置参数声明后面
# 函数返回值是多个值时 是一个元组
def fun3(*a, **b):
    return a, b


# def fun4(**a, *b):
#    return a, b

# 默认参数
def fun4(a, b=2):
    return a, b


# 递归函数
def fun5(n):
    if n == 1:
        return 1
    else:
        return n * fun5(n - 1)


print(add(1, 2))
print(fun1(1, 2, 3))
print(fun2(name='chou'))
print(fun3(1, 2, 3, name='chou', age=18))
print(fun5(4))
