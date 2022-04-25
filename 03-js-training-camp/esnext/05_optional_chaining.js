const person = {
  name: 'nanshu',
  age: 18,
  hobby: {
    morning: {
      desc: 'morning hobby',
      do: () => console.log('做一些早上才能做的事'),
    },
    evening: {
      desc: 'evening hobby',
      do: () => console.log('做一些晚上才能做的事'),
    },
  },
};

person.hobby.morning.do();
person.hobby.evening.do();

// person.hobby.noon.do();
person.hobby &&
  person.hobby.noon &&
  person.hobby.noon.do &&
  person.hobby.noon.do();

person.hobby?.noon?.do();
