# iter 用来生成迭代器

lst = [1, 2, 3, 4, 5, 6]

for i in lst:
    print(i)

for i in iter(lst):
    print(i)

print(iter(lst))
