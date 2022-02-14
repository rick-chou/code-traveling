// 表示这个对象接受 任意string的键 any的值
interface LooseObj {
  [k: string]: any;
}

// 你也可以设置这个索引签名为只读
interface ReadOnlyLooseObj {
  readonly [k: string]: any;
}

interface LooseArr {
  [k: number]: any;
}

const arr: LooseArr = [1, '1', true];
