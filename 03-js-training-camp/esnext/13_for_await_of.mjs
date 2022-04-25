const fetchArr = [Promise.resolve('eating...'), Promise.resolve('sleeping...')];

const it = fetchArr[Symbol.iterator]();

for (const fetch of it) {
  fetch.then(console.log);
}

for await (const fetch of it) {
  console.log(fetch);
}
