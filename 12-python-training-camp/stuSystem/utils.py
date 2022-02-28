# Author -- Chou
# Time   -- 2022/2/27 15:22

from os import path

outFile = path.abspath(path.join(path.dirname(__file__), './student.txt'))


def save(student_list, cover=False):
    mode = 'w' if cover else 'a'
    file = open(outFile, mode, encoding='utf-8')
    for item in student_list:
        file.write(str(item) + '\n')
    file.close()


def get():
    if path.exists(outFile):
        file = open(outFile, 'r', encoding='utf-8')
        result = file.readlines()
        student_list = []
        for item in result:
            student_list.append(eval(item))
        return student_list
