const hahaha = (start, length, step) => {
  return new Array(length).fill(0).reduce((acc, cur, idx) => {
    if (idx * step < length) {
      return [
        ...acc,
        {
          label: idx * step + start,
          value: idx * step + start,
        },
      ];
    }
    return acc;
  }, []);
};

console.log(hahaha(10, 30, 10));
