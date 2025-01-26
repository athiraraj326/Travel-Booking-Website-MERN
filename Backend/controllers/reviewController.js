const reviews = require('../models/reviewModal')
const users = require('../models/userModal')
const tours = require('../models/tourModal')

// add review
exports.addReviewController = async (req,res)=>{
    console.log("Inside addReviewController");
    const userId = req.userId
    const {tourId} = req.params
    const {reviewText,rating} = req.body
    try{
        const userData = await users.findOne({_id:userId})
        // console.log(userData);
        const username = userData.username
        // console.log(username);
        const newReview = new reviews({
            reviewText,rating,username,tourId
        })
        await newReview.save()
        res.status(200).json(newReview)
    }catch(err){
        res.status(401).json(err)
    }
}

// get tour review
exports.getTourReviewController = async (req,res)=>{
    console.log("Inside getTourReviewController");
    const {tourId} = req.params
    try{
        const allReviews = await reviews.find({tourId})
        res.status(200).json(allReviews)
    }catch(err){
        res.status(401).json(err)
    }
}

// get all reviews
exports.getAllReviewsController = async (req,res)=>{
    console.log("Inside getAllReviewsController");
    try{
        const allReviews = await reviews.find()
        res.status(200).json(allReviews)
    }catch(err){
        res.status(401).json(err)
    }
}