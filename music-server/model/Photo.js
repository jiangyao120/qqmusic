const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectIndex = Schema.Types.ObjectId;
const photoSchema = new Schema({
    id: ObjectIndex,
    title: String,
    src: String,

})



mongoose.model('Photo', photoSchema);