const Koa = require('koa');

const userRouter = require('./router/user');

const app = new Koa();

app.use(userRouter.routes());

app.listen(3000, () => {
  console.log('server start...');
});
