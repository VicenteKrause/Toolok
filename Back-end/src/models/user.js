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
userSchema.methods.isAdmin = function(name){
    if(this.name==name){
    }    
        if(this.admin){
            
            return(true);
            
        }else{
            return(false);
        }
    
    
}

module.exports = mongoose.model('User', userSchema);