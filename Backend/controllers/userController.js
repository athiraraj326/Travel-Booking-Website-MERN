const users = require('../models/userModal')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// register
exports.registerController = async (req, res) => {
    console.log("Inside Register controller");
    console.log(req.body);
    const { username, email, password } = req.body
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("Already existing user... Please Login!!!")
        } else {
            const encrypted = await bcrypt.hash(password, 10)
            const newUser = new users({
                username, email, password: encrypted, profilePic: "", mobile: ""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// login
exports.loginController = async (req, res) => {
    console.log("Inside loginController");
    const { email, password } = req.body
    console.log(email, password);
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            const decrypted = await bcrypt.compare(password, existingUser.password)
            console.log(decrypted);

            if (decrypted || existingUser.password) {
                // token generation
                const token = jwt.sign({ userId: existingUser._id }, process.env.JWTPASSWORD)
                res.status(200).json({
                    user: existingUser, token
                })
            } else {
                res.status(404).json("Invalid Email / Password")
            }
        } else {
            res.status(404).json("Invalid Email / Password")
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// get all users
exports.getAllUserController = async (req,res)=>{
    console.log("Inside getAllUserController");
    try{
        const allUsers = await users.find({"role":"user"})
        res.status(200).json(allUsers)
    } catch (err) {
        res.status(401).json(err)
    }
}

// edit profile
exports.editUserController = async (req,res)=>{
    console.log("Inside editUserController");
    const {username,email,password,profilePic,mobile} = req.body
    const uploadProfilePic = req.file?req.file.filename:profilePic
    const id = req.userId
    
    try{
        const updateUser = await users.findByIdAndUpdate({_id:id},{
            username,email,password,profilePic:uploadProfilePic,mobile
        },{new:true})
        await updateUser.save()
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(401).json(err)
    }
}