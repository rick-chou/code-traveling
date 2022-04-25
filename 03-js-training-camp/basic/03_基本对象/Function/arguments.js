/**
 * 箭头函数的argument指向上层作用域的argument
 */

const add1 = () => {
  console.log(arguments);
};

const add2 = function () {
  console.log(arguments);
  return () => {
    console.log(arguments);
  };
};

add1(1, 2, 3, 4, 5);
add2(1, 2, 3, 4, 5); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
const add3 = add2(1, 2, 3, 4, 5); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
add3(); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
