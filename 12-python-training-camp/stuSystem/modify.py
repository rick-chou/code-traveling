# Author -- Chou
# Time   -- 2022/2/25 23:48

from utils import get, save


def modify():
    old_student_list = get()
    new_student_list = []
    stu_id = int(input('请输入你要修改成绩的学生id \n'))
    for item in old_student_list:
        if stu_id == item['id']:
            try:
                python = int(input('请录入python成绩 \n'))
                react = int(input('请录入react成绩 \n'))
                go = int(input('请录入go成绩 \n'))
                new_student_list.append(item | {'python': python, 'react': react, 'go': go})
            except ValueError:
                print('输入的成绩无效，请重新输入')
        else:
            new_student_list.append(item)

    save(new_student_list, cover=True)
