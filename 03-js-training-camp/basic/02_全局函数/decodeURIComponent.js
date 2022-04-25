console.log(encodeURIComponent('南树')); // %E5%8D%97%E6%A0%91
console.log(encodeURI('南树')); // %E5%8D%97%E6%A0%91

console.log(decodeURIComponent(encodeURI('南树'))); // 南树
console.log(decodeURIComponent(encodeURIComponent('南树'))); // 南树
