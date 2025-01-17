const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const messages = mongoose.model('messages',messageSchema)
module.exports = messages