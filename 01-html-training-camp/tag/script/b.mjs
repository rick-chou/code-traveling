console.log('module B');

const nickname = await Promise.resolve('chou');
console.log(`My name is ${nickname}`);
