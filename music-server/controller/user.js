const Router = require('koa-router');
const router = new Router();
const mongoose = require('mongoose');

router.post('/login', async(ctx) => {
    let loginUser = ctx.request.body;
    console.log(ctx.request.body);
    const User = mongoose.model('User');
    let username = loginUser.username;
    let passWord = loginUser.password;
    await User.findOne({ username: username }).exec().then(
        async(result) => {
            if (result) {
                let newUser = new User();
                await newUser.comparePassword(passWord, result.password).then(isMath => {
                    if (isMath) {
                        ctx.body = {
                            code: 200,
                            message: 'chunzai'
                        }
                    } else {
                        ctx.body = {
                            code: 502,
                            message: 'mimacuowu'
                        }
                    }
                })
            } else {
                ctx.body = {
                    code: 501,
                    message: 'buchunzai'
                }
            }
        }
    )
});
router.post('/regist', async(ctx) => {
    const User = mongoose.model('User');
    let newUser = new User(ctx.request.body);
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: 'regist scuccess'
        }
    }).catch(() => {
        ctx.body = {
            code: 500,
            message: 'regist err'
        }
    })
});
module.exports = router;