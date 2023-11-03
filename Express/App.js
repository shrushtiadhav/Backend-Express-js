const express = require('express')  //import express package
const app = express()
const mongoose = require('mongoose') //import mongoose package
const cors = require('cors')
mongoose.connect('mongodb://127.0.0.1:27017/ExpressDB') //here database is connect to localhost

//for response we can use then command,if the condition is true here then no need to catch method
.then(()=>{
    console.log("Successfully connect to database");
})

//for detecting error 
.catch((err)=>{
    console.log(err);
})
app.use(express.json())  // We can also used here Multiple methods 
app.get('/',(req,res)=>{  //server to show response 
    res.send('hello')
})

app.use(cors())
app.use(express.static('public/images'))

//import router
const userRouter = require('./Router/UserRouter')
app.use('/user',userRouter)//use this router here



//for creating server
app.listen(8080,()=>{
    console.log("server running");
})



