var a = 1;
var b = 2;

a ||= b; // a = a || b;
console.log(a);

a &&= b; // a = a && b;
console.log(a);

a ??= b; // a = a ?? b;
console.log(a);
