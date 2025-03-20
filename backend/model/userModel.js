const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});
const userModel = mongoose.model('user',UserSchema);
module.exports = userModel;