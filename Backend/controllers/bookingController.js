const Razorpay = require('razorpay')
const tours = require('../models/tourModal')
const crypto = require('crypto');
const bookings = require('../models/bookingModal')

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

// validate razorpay order
exports.paymentValidateController = async (req,res)=>{
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body
    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`)
    const digest = sha.digest("hex")
    if(digest !== razorpay_signature){
        return res.status(400).json({msg: "Payment Validation Failed"})
    }
    res.json({
        msg: "Payment Validation Successfull"
    })
}

// add booking details
exports.addBookingDetailsController = async (req,res)=>{
    console.log("Inside addBookingDetailsController");
    const {fullName, email, phNumber, address, date, person, paymentMode, price} = req.body
    const userId = req.userId
    const {id} = req.params
    try{
        const findTour = await tours.findOne({_id:id})
        const country = findTour.country
        const place = findTour.place
        const duration = findTour.duration
        const image = findTour.image
        const newBooking = new bookings({
            country, place, duration, image, fullName, email, phNumber, address, date, person, paymentMode, price, userId, countryId:id
        })
        await newBooking.save()
        res.status(200).json(newBooking)
    } catch(err){
        res.status(401).json(err)
    }
}

// get user bookings
exports.getUserBookingsController = async (req,res)=>{
    console.log("Inside getUserBookingsController");
    const userId = req.userId
    try{
        const userBookings = await bookings.find({userId})
        res.status(200).json(userBookings)
    } catch(err){
        res.status(401).json(err)
    }
}

// get all bookings
exports.getAllBookingsController = async (req,res)=>{
    console.log("Inside getAllBookingsController");
    try{
        const allBookings = await bookings.find()
        res.status(200).json(allBookings)
    } catch(err){
        res.status(401).json(err)
    }
}
