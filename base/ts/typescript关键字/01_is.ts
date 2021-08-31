function isString1(test: any): test is string {
  return typeof test === 'string';
}

function isString2(test: any): boolean {
  return typeof test === 'string';
}

const a = isString1('123'); // --> true
const b = isString2('123'); // --> true

function doSomething(params: any) {
  if (isString1(params)) {
    params.toLowerCase();
    // params.xxx(); // --> Property 'xxx' does not exist on type 'string'
  }
  if (isString2(params)) {
    params.xxx(); // TypeError: params.xxx is not a function
  }
}

doSomething('123');
