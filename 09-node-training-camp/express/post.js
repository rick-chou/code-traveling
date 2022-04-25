const express = require('express');

const app = express();

// 老版本写法 不推荐
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// 4.16以后的写法 推荐
// extended false 表示使用node的内置模块querystring来解析
// true 则表示使用第三方模块qs来解析
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/login', (req, res, next) => {
  res.json(req.body);
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('server start...');
});
