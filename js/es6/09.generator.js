// function* helloWorldGenerator() {
//   yield 'hello';
//   yield 'world';
//   return 'ending';
// }
// var hw = helloWorldGenerator();

// console.log(hw.next()); // { value: 'hello', done: false }
// console.log(hw.next()); // { value: 'world', done: false }
// console.log(hw.next()); // { value: 'ending', done: true }

function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
