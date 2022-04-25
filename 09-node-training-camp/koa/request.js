const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(router.routes());

// 解析query
router.get('/query', (ctx, next) => {
  ctx.body = ctx.request.query;
});

// 解析params
router.get('/params/:id', (ctx, next) => {
  ctx.body = ctx.request.params;
});

// 解析urlencoded
router.post('/urlencoded', (ctx, next) => {
  ctx.body = ctx.request.body;
});

// 解析json
router.post('/json', (ctx, next) => {
  ctx.body = ctx.request.body;
});

app.listen(3000, () => {
  console.log('server start...');
});
