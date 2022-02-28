const obj = undefined as any;

const age1 = obj?.bar?.age;
// const age2 = obj.bar.age;
console.log(age1);
// console.log(age2);
