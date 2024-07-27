const mongoose = require("mongoose");
require("dotenv").config();

const MongoDB =()=>{
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.log("Connected succesfully");
    }).catch(()=>{
        console.log("Connection failed");
    });
} 

module.exports = MongoDB;