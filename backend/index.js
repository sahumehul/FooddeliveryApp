const express = require("express");
const app = express();
require("dotenv").config();
const MongoDB = require("./db")
MongoDB();
const userRouter = require("./routes/user")
app.use(express.json());
app.use("/api/v1",userRouter)
app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(process.env.PORT,()=>{
    console.log(`App is running on ${process.env.PORT}`)
})