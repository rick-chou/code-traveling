// 类型别名用来给类型起一个新的名字
// 起别名不会新建一个类型 --> 它创建了一个新名字来引用那个类型
type Name = string;
type NameResolver = () => string;

const nickname: Name = 'nanshu';
const handleNameResolver: NameResolver = () => 'nanshu';

// 不同与interface type不能重复命名
// type Name = number;  Duplicate identifier 'Name'.
