function returnSomething() {
  return 'string';
}

function* task() {
  // 这里的 result 在TS中是没有拿到正确的函数返回类型的，大家可以试一下
  const result = yield returnSomething();
}

function* task() {
  // 这里的 result 就可以拿到正确的返回值
  const result: ReturnType<typeof returnSomething> = yield returnSomething();
}
