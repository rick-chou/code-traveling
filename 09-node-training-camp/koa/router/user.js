const Router = require('koa-router');

const userRouter = new Router({ prefix: '/user' });

userRouter.get('/home', (ctx, next) => {
  ctx.body = 'welcome~~';
});

userRouter.post('/login', (ctx, next) => {
  ctx.body = 'login...';
});

module.exports = userRouter;
