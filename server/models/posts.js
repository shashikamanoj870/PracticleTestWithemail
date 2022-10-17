const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
   

    appno:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    email:{
        type:String,
        required:true
    }, 
    address:{
        type:String,
        required:true
    }, 
    mobileno:{
        type:String,
        required:true
    }



});

module.exports= mongoose.model('Posts',postSchema);