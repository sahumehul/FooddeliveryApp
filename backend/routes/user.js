const express = require("express");
const userRouter = express.Router();
const User = require("../model/User")

userRouter.post("/createuser", async(req,res)=>{
    const {name, email, password, location} = req.body;

    const userData = new User({
        name, email,password,location
    })

    await userData.save().then((result)=>{
        res.status(200).json({
            success: true,
            message: "Data saved successfully",
            data : result
        })
    }).catch((err)=>{
        res.status(400).json({
            success: false,
            message: "Something went wrong",
            data : err
        })
    })
})

module.exports = userRouter;