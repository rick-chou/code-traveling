console.log('-'.repeat(10), '||', '-'.repeat(10));
console.log(0 || 1);
console.log(undefined || 1);
console.log(false || 1);
console.log(null || 1);
console.log('' || 1);

console.log(' ?? '.padStart(14, '-').padEnd(24, '-'));
console.log(0 ?? 1);
console.log(false ?? 1);
console.log('' ?? 1);
console.log(undefined ?? 1);
console.log(null ?? 1);
