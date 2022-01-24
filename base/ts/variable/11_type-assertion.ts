/**
 * 建议使用as 因为在react中<>的写法会和jsx冲突 所以只要as是合法的
 */

let someVal: any = 'this is a string';

// 尖括号
let len: number = (<string>someVal).length;

// as
let str: string = (someVal as string).toLocaleUpperCase();
