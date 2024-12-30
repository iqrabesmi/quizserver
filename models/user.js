const mongoose = require('mongoose'); 

var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    school:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    standard:{
        type:Number,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
    },
    motherTongue:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    relation:{
        type:String,
        required:true,
    },
    father:{
        type:String,
        required:true,
    },
    mother:{
        type:String,
        required:true,
    },
    siblings:{
        type:String,
        required:true,
    },
});


let userModel = mongoose.model('User', userSchema);

module.exports = {
    userModel,
}