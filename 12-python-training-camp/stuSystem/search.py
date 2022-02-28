# Author -- Chou
# Time   -- 2022/2/25 23:46

from utils import get
from show import show


def search():
    student_list = get()
    if not student_list:
        print('暂无学生成绩 请录入')
    else:
        search_id = int(input('请输入学生id \n'))
        for item in student_list:
            if search_id == item['id']:
                show([item])
                return
        print('没有该学生信息')
