/**
 *  用作类型保护
 */

const isString1 = (test: any): test is string => typeof test === 'string';

const isString2 = (test: any): boolean => typeof test === 'string';

isString1('123'); // --> true
isString2('123'); // --> true

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
