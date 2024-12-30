const tours = require('../models/tourModal')

// add tours

// get all tours
exports.getTourListController = async (req,res)=>{
    console.log("Inside getTourListController");
    const searchKey = req.query.search
    console.log(searchKey);
    const query = {
        country:{
            $regex:searchKey,$options:'i'
        }
    }
    try{
        const allTours = await tours.find(query)
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

// get Home tours
exports.getHomeTourController = async (req,res)=>{
    console.log("Inside getTourListController");
    try{
        const allHomeTours = await tours.find().limit(5)
        res.status(200).json(allHomeTours)
    }catch(err){
        res.status(401).json(err)
    }
}
