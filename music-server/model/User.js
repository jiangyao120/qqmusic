const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    userid: ObjectId,
    username: { unique: true, type: String },
    password: String,

})
userSchema.pre('save', function(next) {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err);
            this.password = hash;
            next();
        })

    })
})
userSchema.methods = {
    comparePassword: (_password, password) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(_password, password, (err, res) => {
                console.log(err, res)
                if (!err) {
                    resolve(res);

                } else reject(err);
            })
        })
    }
}
mongoose.model('User', userSchema);