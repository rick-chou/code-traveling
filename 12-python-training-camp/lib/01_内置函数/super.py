class Person:
    def fn(self):
        pass


class Student(Person):
    def bar(self):
        super().fn()
