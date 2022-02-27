# 首先获得Iterator对象:
it = iter([1, 2, 3, 4, 5])
while True:
    try:
        # 获得下一个值:
        x = next(it)
        print(x)
    except StopIteration:
        # 遇到StopIteration就退出循环
        break
