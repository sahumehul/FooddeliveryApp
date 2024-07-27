const express = require("express");
const app = express();
require("dotenv").config();
const MongoDB = require("./db")

MongoDB();

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(process.env.PORT,()=>{
    console.log(`App is running on ${process.env.PORT}`)
})