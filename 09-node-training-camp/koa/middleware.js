const Koa = require('koa');

const app = new Koa();

const middlewareA = (ctx, next) => {
  console.log('middlewareA');
  next();
  console.log('middlewareA');
};

const middlewareB = (ctx, next) => {
  console.log('middlewareB');
  next();
  console.log('middlewareB');
};

const middlewareC = (ctx, next) => {
  console.log('middlewareC');
  next();
  console.log('middlewareC');
};

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);

app.listen(3000, () => {
  console.log('server start');
});
