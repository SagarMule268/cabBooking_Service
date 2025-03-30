const mongoose = require('mongoose'); 
const dotenv = require('dotenv');

const CabSchema = mongoose.Schema({
    "client_name":{
        type:String,
        required:true
    },

    "pickup_location":{
        type:String,
        required:true
    },

    "drop_location":{
        type:String,
        required:true
    },
    "cab_type":{
        type:String,
        required:true
    },

    "book_date":{
        type:Date,
        required:true
    },
    "book_time":{
        type:Date,
        required:true
    }

});
const cabModel = mongoose.model('cabBook',CabSchema);
module.exports = cabModel ;