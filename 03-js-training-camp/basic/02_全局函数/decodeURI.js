/**
 * decodeURI(encodedURI)
 * 解码由encodeURI创建的URL
 */

console.log(encodeURI('南树')); // %E5%8D%97%E6%A0%91

console.log(decodeURI(encodeURI('南树'))); // 南树
