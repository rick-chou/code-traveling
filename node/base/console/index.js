
/**
 * console.time()
 * console.timeEnd()
 * 获取程序运行的时间
 */
console.time('for')

for (let i = 0; i <= 10000000; i++) {

}

console.timeEnd('for')

console.time('while')

let i = 0
while (i <= 10000000) {
  i++
}

console.timeEnd('while')

/**
 * console.table
 * 表格形式输出一个对象
 * 可以传入一个对象
 * 也可以传入一个数组 此时第二个参数为一个筛选项
 */

const obj1 = {
  name: 'chou',
  age: 18,
  hobby: 'ramires'
}

console.table(obj1)

const obj2 = {
  name: 'ramires',
  age: 18,
  hobby: 'chou'
}

console.table([obj1, obj2])
console.table([obj1, obj2], ['name'])