setTimeout(() => {
  console.log('setTimeout执行了')
}, 0);


setImmediate(() => {
  console.log('setImmediate执行了')
})


process.nextTick(() => {
  console.log('nextTick执行了')
})

console.log('同步函数执行了')

