const Koa = require('koa');
const app = new Koa();
//连接数据库
const { connect, initSchemas } = require('./initmodel.js');
(async() => {
    await connect();
    initSchemas();
})()
//解决跨域
const cors = require('koa2-cors');
app.use(cors({
    origin: ['*'],
    credentials: true
}));

const bodyParse = require('koa-bodyparser');
app.use(bodyParse());

//加载路由
const Router = require('koa-router');
let user = require("./controller/user.js");
let music = require('./controller/music.js');
let photo = require('./controller/photo.js');


let router = new Router();
router.use('/user', user.routes());
router.use('/music', music.routes());
router.use('/photo', photo.routes());

app.use(router.routes());
app.use(router.allowedMethods());







app.use(async(ctx) => {
    ctx.body = '<h1> hellow world</h1>'
})
app.listen(3000, () => {
    console.log("server start")
})