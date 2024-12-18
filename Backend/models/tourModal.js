const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
    country:{
        type:String,
        required:true
    },
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
    }
})

const tours = mongoose.model("tours",tourSchema)
module.exports = tours