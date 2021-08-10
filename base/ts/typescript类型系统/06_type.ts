// 类型别名用来给类型起一个新的名字
type Name = string;
type NameResolver = () => string;

const nickname: Name = 'nanshu';

// 不同与interface type不能重复命名
// type Name = number;  Duplicate identifier 'Name'.
