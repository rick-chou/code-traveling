console.log(process.arch)
console.log(process.platform)

console.log(process.argv)

console.log(process.cwd())

process.nextTick(() => {
  console.log('hello')
})