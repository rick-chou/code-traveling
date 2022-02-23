const axios = require('axios');

// 获取组织下的仓库
axios.get('https://api.github.com/orgs/YepGym/repos').then((res) => {
  console.log(res.data.map((item) => item.name));
});

axios
  .get('https://api.github.com/repos/YepGym/custom-ejs-template/tags')
  .then((res) => {
    console.log(res.data);
  });
