# Author -- Chou
# Time   -- 2022/2/25 23:12

from menu import menu
from insert import insert
from search import search
from delete import delete
from modify import modify
from sort import sort
from total import total
from show import show

fn = [insert, search, delete, modify, sort, total, show]


def main():
    while True:
        menu()
        choice = int(input('请选择 \n'))
        if choice in range(0, 8):
            if choice == 0:
                confirm = input('你确认退出吗 y/n ')
                if confirm == 'Y' or confirm == 'y':
                    print('感谢你的使用～～～')
                    break
                else:
                    continue
            else:
                fn[choice - 1]()


if __name__ == '__main__':
    main()
