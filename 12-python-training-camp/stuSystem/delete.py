# Author -- Chou
# Time   -- 2022/2/25 23:53

from utils import get, save


def delete():
    stu_id = int(input('请输入你要删除的学生id \n'))
    old_student_list = get()
    new_student_list = []
    for item in old_student_list:
        if stu_id == item['id']:
            continue
        new_student_list.append(item)

    save(new_student_list, cover=True)
