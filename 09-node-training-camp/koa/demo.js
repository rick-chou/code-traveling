const Koa = require('koa');

const app = new Koa();

const middlewareA = async (ctx, next) => {
  ctx.message = '';
  ctx.message += 'A';
  await next();
  ctx.body = ctx.message;
};

const middlewareB = async (ctx, next) => {
  ctx.message += await Promise.resolve('B');
  await next();
};

const middlewareC = async (ctx, next) => {
  ctx.message += 'C';
  await next();
};

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);

app.listen(3000, () => {
  console.log('server start...');
});
