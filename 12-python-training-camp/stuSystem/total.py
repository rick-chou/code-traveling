# Author -- Chou
# Time   -- 2022/2/25 23:49

from utils import get


def total():
    student_list = get()
    print('当前学生人数: {0}'.format(len(student_list)))
