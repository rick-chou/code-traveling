import express from 'express';
import userRouter from './routes/user';

const app = express();

// 开启跨域
// app.all('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
//   res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
//   next();
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/user', userRouter);

app.listen('8080');
