const tours = require('../models/tourModal')

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

// Home tour search
exports.getHomeSearchTourController = async (req,res)=>{
    console.log("Inside getHomeSearchTourController");
    const {location} = req.params 
   
    try{
        const searchLocation = await tours.find({$or: [
            { place: {$regex:location,$options:'i'} },
            { country: {$regex:location,$options:'i'} }
          ]})
          console.log(searchLocation);
          
        res.status(200).json(searchLocation)
    }catch(err){
        res.status(401).json(err)
    }
}

// add tour
exports.addTourController = async (req,res)=>{
    console.log("Inside addTourController");
    const {country,place,duration,image,price} = req.body
    try{
        const existingTour = await tours.findOne({country,place,duration})
        if(existingTour ){
            res.status(404).json("Tour Package already exist...")
        }else{
            const newTour = new tours({
                country,place,duration,image,price
            })
            await newTour.save()
            res.status(200).json(newTour)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

// delete tour
exports.deleteTourController = async (req,res)=>{
    console.log("Inside deleteTourController");
    const {id} = req.params    
    try{
        const deleteTour = await tours.findByIdAndDelete({_id:id})
        res.status(200).json(deleteTour)
    }catch(err){
        res.status(401).json(err)
    }
}

// edit tour
exports.editTourController = async (req,res)=>{
    console.log("Inside editTourController");
    const {id} = req.params
    const {country,place,duration,image,price} = req.body
    try{
        const updateTour = await tours.findByIdAndUpdate({_id:id},{
            country,place,duration,image,price
        },{new:true})
        await updateTour.save()
        res.status(200).json(updateTour)
    }catch(err){
        res.status(401).json(err)
    }
}

// get tours count
exports.getTourCountController = async (req,res)=>{
    console.log("Inside getTourListController");
    try{
        const allHomeTours = await tours.find()
        res.status(200).json(allHomeTours)
    }catch(err){
        res.status(401).json(err)
    }
}

