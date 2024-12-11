const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
    place:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    depTime:{
        type:String,
        required:true
    }
})

const tours = mongoose.model("tours",tourSchema)
module.exports = tours