# Author -- Chou
# Time   -- 2022/2/25 23:51

from utils import get
from prettytable import PrettyTable


def show(*arg):
    if arg:
        student_list = arg[0]
    else:
        student_list = get()
    if not student_list:
        print('暂无学生成绩 请录入')
    else:
        table = PrettyTable(['id', 'name', 'python', 'react', 'go'])
        for item in student_list:
            table.add_row(list(item.values()))
        print(table)

