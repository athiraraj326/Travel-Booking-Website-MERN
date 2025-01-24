const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
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
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    person:{
        type:String,
        required:true
    },
    paymentMode:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    countryId:{
        type:String,
        required:true
    }
})

const bookings = mongoose.model("bookings",bookingSchema)
module.exports = bookings