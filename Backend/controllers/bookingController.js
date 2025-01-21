const Razorpay = require('razorpay')
const tours = require('../models/tourModal')

// get booking tour details
exports.getBookingTourController = async (req,res)=>{
    console.log("Inside getBookedTourController");
    const {id} = req.params
    try{
        const tourDetails = await tours.findById({_id:id})
        res.status(200).json(tourDetails)
    }catch(err){
        res.status(401).json(err)
    }
}

// create razorpay order
exports.razorpayCreateOrderController = async (req,res)=>{
    try{
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        })

        const options = req.body
        const order = await razorpay.orders.create(options)

        if(!order) {
            return res.status(500).send("Error")
        }
        res.json(order)
    }catch(err){
        console.log(err);
        res.status(500).send("Error")
    }
}