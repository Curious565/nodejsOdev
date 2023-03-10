const Koa = require('koa');
const Router = require('@koa/router');
const PORT = 3000
const app = new Koa();
const router = new Router()

router.get('/',(ctx) =>{
    ctx.status = 200
ctx.body = '<h1> Index Page</h1>'
})
router.get('/about',(ctx) =>{
    ctx.status = 200
    ctx.body = '<h1>About Page</h1>'
    })
router.get('/contact',(ctx) =>{
    ctx.status = 200
    ctx.body = '<h1>Contact Page</h1>'
    })

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(PORT);