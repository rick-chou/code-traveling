let a = 5;
let b = 10;

function tag() {
  console.log(arguments);
}

tag`${a - b} Hello ${a + b} world ${a * b}`;
