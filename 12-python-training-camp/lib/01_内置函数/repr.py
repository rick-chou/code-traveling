print(repr({"name": "chou"}))


class Person:
    def __init__(self, name) -> None:
        self.name = name

    # def __repr__(self) -> str:
    #     return 'nanshu'


stu = Person('chou')
print(stu)
