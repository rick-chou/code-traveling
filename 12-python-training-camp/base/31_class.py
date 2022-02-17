# Author -- Chou
# Time   -- 2022/2/15 10:35 PM

class Student:
    def __init__(self, name, age, height):
        self.name = name
        self.age = age
        # 私有属性 在外部不可访问
        self.__height = height

    # 类属性
    country = 'China'

    # 实例方法
    def introduce(self):
        print('name', self.name)
        print('age', self.age)

    # 类方法
    @classmethod
    def cm(cls):
        print('我是类方法 用 @classmethod 修饰 我有一个cls参数', cls)

    # 静态方法
    @staticmethod
    def sm():
        print('我是类方法 用 @staticmethod 修饰 我没有参数')


print('------类对象------')
print(id(Student))
print(Student)
print(type(Student))

print('------实例对象------')
stu = Student('chou', 18, 180)
print(stu.age)
print(stu.name)
# print(dir(stu))
# print(stu._Student__height) 可以这样获取私有属性
print('------类属性------')
print(Student.country)
print(stu.country)
print('------实例方法------')
stu.introduce()
print('------类方法------')
Student.cm()
print('------静态方法------')
Student.sm()

print('-------------------')
print('------类的继承------')


class SmallStudent(Student):
    def __init__(self, name, age, height, weight):
        super().__init__(name, age, height)
        self.weight = weight

    # 子类重写父类方法
    def introduce(self):
        print('我是小学生')
        super().introduce()


smStu = SmallStudent('nanshu', 8, 180, 150)
print(smStu.weight)
smStu.introduce()
