export const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

export const wait = (delay: number) => {
  var start = new Date().getTime();
  while (new Date().getTime() - start < delay) {
    continue;
  }
};
