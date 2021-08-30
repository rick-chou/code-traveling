import { type } from 'os';

function returnSomething() {
  return 'string';
}

type returnType = string;

function* task() {
  // 这里的 result 在TS中是没有拿到正确的函数返回类型的，大家可以试一下
  const result: ReturnType<typeof returnSomething> = yield returnSomething();
}

type a<T> = T extends (...args: any) => infer R ? R : any;

type b = a<() => string>;
