const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const fs = require('fs');
router.get('/getmusics', async(ctx) => {
    const musics = mongoose.model('Music');
    await musics.find({}).exec().then(res => {
        console.log(res);
        ctx.body = res;
    })
})
router.get('/getmusic', async(ctx) => {
    fs.readFile('./data/musicdata.json', 'utf-8', (err, data) => {
        data = JSON.parse(data);
        console.log(data);
        let count = 0; //计数
        const Music = mongoose.model('Music');
        data.map((value, index) => {
            console.log(value);
            let music = new Music(value);
            music.save().then(() => {
                count++;
                console.log("chenggog" + count);
            }).catch((err) => {
                console.log("shibai" + err);
            })
        })

    });
    ctx.body = "导入数据";
})
module.exports = router;