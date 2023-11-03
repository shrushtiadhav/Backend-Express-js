const mongoose = require('mongoose')
const userSchemqa = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
    },
    fname:{
        type:String,
        required:true,
        default:"Srushti"
    },
    lname:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },

    image: {
        type: String,
        required: true
    }
    
}, {timestamps:true}) 

// here we can use timestamps for knowing when we create and update information 
module.exports = mongoose.model('user',userSchemqa)