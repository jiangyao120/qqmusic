const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const fs = require('fs');
router.get('/getphotos', async(ctx) => {
    const musics = mongoose.model('Photo');
    await musics.find({}).exec().then(res => {
        console.log(res);
        ctx.body = res;
    })
})
router.get('/getphoto', async(ctx) => {
    fs.readFile('./data/photo.json', 'utf-8', (err, data) => {
        data = JSON.parse(data);
        console.log(data);
        let count = 0; //计数
        const Photo = mongoose.model('Photo');
        data.map((value, index) => {
            console.log(value);
            let photo = new Photo(value);
            photo.save().then(() => {
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