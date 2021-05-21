const Koa = require('koa')
const jsonError = require('koa-json-error')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

app.use(jsonError).use(router.routes())

router.get('/', async (ctx) => {
  ctx.body = 'Hello World'
  // ctx.throw(401)
})

console.log(process.env.NODE_ENV)

app.listen(3000)
