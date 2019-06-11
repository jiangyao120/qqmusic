const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectIndex = Schema.Types.ObjectId;
const musicSchema = new Schema({
    id: ObjectIndex,
    title: String,
    author: String,
    src: String,
    musicImgSrc: String,
})



mongoose.model('Music', musicSchema);