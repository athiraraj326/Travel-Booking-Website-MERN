const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    reviewText:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    tourId:{
        type:String,
        required:true
    }
})

const reviews = mongoose.model("reviews",reviewSchema)

module.exports = reviews