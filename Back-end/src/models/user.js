const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        require: true
    }
});

userSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password , function(err , same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
}

module.exports = mongoose.model('User', userSchema);