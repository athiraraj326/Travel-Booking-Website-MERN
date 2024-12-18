const tours = require('../models/tourModal')

// add tours

// get tours
exports.getTourListController = async (req,res)=>{
    console.log("Inside getTourListController");
    try{
        const allTours = await tours.find()
        res.status(200).json(allTours)
    }catch(err){
        res.status(401).json(err)
    }
}

// get single tour
exports.getSingleTourController = async (req,res)=>{
    console.log("Inside getSingleTourController");
    const {id} = req.params
    try{
        const tourDetails = await tours.findById({_id:id})
        res.status(200).json(tourDetails)
    }catch(err){
        res.status(401).json(err)
    }
}