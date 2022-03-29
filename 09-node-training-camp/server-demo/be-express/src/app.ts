import express from 'express';
import userRouter from './routes/user';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/user', userRouter);

app.listen('8080');
