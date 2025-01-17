const messages = require("../models/messageModal")

// add message
exports.addMessageController = async (req,res)=>{
    console.log("Inside addMessageController");
    const {name,email,phone,location,message} = req.body
    try{
        const newMessage = new messages({
            name,email,phone,location,message
        })
        await newMessage.save()
        res.status(200).json(newMessage)
    }catch(err){
        res.status(401).json(err)
    }
}