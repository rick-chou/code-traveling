/**
 * new Error([message[, fileName[,lineNumber]]])
 * 通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出
 */

function getFn(fn) {
  if (typeof fn !== 'function') {
    throw new Error('Except a Function');
  }
  return fn;
}

getFn(1); // Error: Except a Function

/**
 * EvalError
 * 创建一个error实例，表示错误的原因：与 eval() 有关。
 *
 * InternalError
 * 创建一个代表Javascript引擎内部错误的异常抛出的实例。 如: "递归太多".
 *
 * RangeError
 * 创建一个error实例，表示错误的原因：数值变量或参数超出其有效范围。
 *
 * ReferenceError
 * 创建一个error实例，表示错误的原因：无效引用。
 *
 * SyntaxError
 * 创建一个error实例，表示错误的原因：eval()在解析代码的过程中发生的语法错误。
 *
 * TypeError
 * 创建一个error实例，表示错误的原因：变量或参数不属于有效类型。
 *
 * URIError
 * 创建一个error实例，表示错误的原因：给 encodeURI()或  decodeURI()传递的参数无效。
 */
