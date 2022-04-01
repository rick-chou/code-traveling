// let jQuery;
// try {
//   jQuery = await import(
//     'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js'
//   );
// } catch {
//   jQuery = await import(
//     'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js'
//   );
// }

const fetchAPI = () => Promise.resolve('some response data');

const res = await fetchAPI();
console.log(res);
