# Author -- Chou
# Time   -- 2022/2/4 9:16 PM

num = int(input('请输入一个正数\n'))

if num > 0:
    if num % 2 == 0:
        print('这是一个偶数')
    else:
        print('这是一个奇数')
else:
    print('数字不合法')
