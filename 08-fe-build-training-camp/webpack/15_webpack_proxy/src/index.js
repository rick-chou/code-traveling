fetch('/api/dsapi/')
  .then((response) => response.json())
  .then((data) => console.log(data));
