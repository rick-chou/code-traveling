const express = require('express');
const multer = require('multer');

const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //  第一个参数为err的相关信息 node的回调函数都是错误优先的回调
    //  第二个参数为文件上传的目的地
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    // 同样的 第一个参数为错误信息 第二个参数为文件名
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

const app = express();

app.post('/upload', upload.single('avatar'), (req, res, next) => {
  res.json(req.file);
});

app.listen(3000, () => {
  console.log('server start...');
});
