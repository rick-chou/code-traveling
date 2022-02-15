# Author -- Chou
# Time   -- 2022/2/4 9:06 PM

money = 1000
num = int(input('请输入金额\n'))
if money >= num:
    money -= num
    print('取款成功, 余额为', money)
