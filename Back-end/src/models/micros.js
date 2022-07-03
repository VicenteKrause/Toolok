const mongoose = require("mongoose");

const microSchema = mongoose.Schema({
    numero:{
        type: String,
        required: true
    },
    inicio:{
        type: String,
        required: true
    },
    final:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    }

});


module.exports = mongoose.model('Micros', microSchema);