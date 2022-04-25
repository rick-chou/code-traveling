# Author -- Chou
# Time   -- 2022/2/25 23:49

from utils import get
from show import show


def sort():
    student_list = get()
    if not student_list:
        print('暂无学生成绩 请录入')
    else:
        sort_id = int(input('按照什么排序\n1.python\n2.go\n3.react\n'))
        lst = ['python', 'go', 'react']
        new_student_list = sorted(student_list, key=lambda e: e.__getitem__(lst[sort_id - 1]), reverse=True)
        show(new_student_list)
