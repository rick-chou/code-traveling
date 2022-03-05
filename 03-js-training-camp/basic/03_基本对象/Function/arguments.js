const add1 = () => {
  console.log(arguments);
};

const add2 = function () {
  console.log(arguments);
};

add1(1, 2, 3, 4, 5);
add2(1, 2, 3, 4, 5); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
