# issubclass(class, classinfo)

class Person:
    pass


class Student(Person):
    pass


print(issubclass(Student, Person))
