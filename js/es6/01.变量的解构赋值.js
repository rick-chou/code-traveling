// function* fibs() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }
// let [first, second, third, fourth, fifth, sixth] = fibs();
// sixth; // 5

// console.log(sixth)

const obj = {
  success: true,
  data: {
    username: 'chou',
    age: 18,
  },
  code: 200,
};

const {
  data: { username },
} = obj;

console.log(username);
