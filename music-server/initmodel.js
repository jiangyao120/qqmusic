const mongoose = require('mongoose');
const db = 'mongodb://localhost/music';
const glob = require('glob'); //安装全局
const path = require('path');
//初始化schema
exports.initSchemas = () => {
    glob.sync(path.resolve(__dirname, './model', '*.js')).forEach(require); //引用所有model下的文件
}




exports.connect = () => {
    mongoose.connect(db, { useNewUrlParser: true });
    //连接数据库
    mongoose.connection.on('disconnected', () => {
        mongoose.connect('err');
    });
    //连接失败 重连
    mongoose.connection.on('error', err => {
        console.log(err);
        mongoose.connect();
    });
    mongoose.connection.on('open', () => {
        console.log("mongodb success");
    })

}