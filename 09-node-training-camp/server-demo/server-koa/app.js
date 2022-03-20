const Koa = require('koa');
const app = new Koa();
const pool = require('./db');

pool.query('select * from user_info', (err, result) => {
  console.log(result);
});

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3005, () => {
  console.log('server start...');
});
