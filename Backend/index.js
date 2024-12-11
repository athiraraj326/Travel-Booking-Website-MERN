
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./database/dbConnection')

const TravelServer = express()

TravelServer.use(cors())
TravelServer.use(express.json())
TravelServer.use(router)

const PORT = 3000 || process.env.PORT

TravelServer.listen(PORT,()=>{
    console.log(`Server started listening on port ${PORT}`);
})

TravelServer.get('/',(req,res)=>{
    res.status(200).send(`Server started and waiting for client request`)
})