export const getQuotes = () => {
  return fetch('http://v3.wufazhuce.com:8000/api/channel/one/0/0').then((res) =>
    res.json()
  );
};
