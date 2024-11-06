//1 import statement

const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const cors = require('cors')
 

//2 config
const PORT = process.env.PORT || 3000;
const { connectToDb } = require('./db');
//connect to db
connectToDb();


//model

const userSchema  = new mongoose.Schema({
    name : {type : String, required:true},
    email : {type:String,required:true}
})

const User = mongoose.model('User',userSchema)

//routes crud


//3 server init ot creating server object
const server = express()

//4 server middlewere
server.use(express.json)
//5 server routes
server.post('/addUser',async (req,res)=>{
    try{
        const newUser = new User(req.body)
        const savingUser = await newUser.save()
        res.json(savingUser)
    }catch(err){
        res.status(400).json({err : err.message})
    }
})

//6 server listen
server.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})