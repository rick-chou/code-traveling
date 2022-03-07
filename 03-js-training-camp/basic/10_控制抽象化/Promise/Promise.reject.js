/**
 * @example Promise.reject(reason)
 * @returns 返回一个带有拒绝原因的Promise对象
 */

Promise.reject(new Error('fail')).catch(console.log); // Error: fail
