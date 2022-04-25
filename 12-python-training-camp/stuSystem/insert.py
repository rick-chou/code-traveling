# Author -- Chou
# Time   -- 2022/2/25 23:41

from os import path
from utils import outFile, save


def insert():
    if path.exists(outFile):
        with open(outFile, 'r', encoding='utf-8') as file:
            student_list = file.readline()

    student_list = []
    while True:
        stu_id = int(input('请录入学生id\n'))
        if not stu_id:
            break
        stu_name = input('请录入学生姓名\n')
        if not stu_name:
            break

        try:
            python = int(input('请录入python成绩\n'))
            react = int(input('请录入react成绩\n'))
            go = int(input('请录入go成绩\n'))
        except ValueError:
            print('输入的成绩无效，请重新输入')
            continue

        student_info = {'id': stu_id, 'name': stu_name,
                        'python': python, 'react': react, "go": go}
        student_list.append(student_info)

        answer = input('是否继续录入 y/n \n')
        if answer == 'Y' or answer == 'y':
            continue
        else:
            break

    save(student_list)
    print('学生信息录入完毕')
