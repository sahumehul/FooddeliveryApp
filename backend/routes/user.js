const express = require("express");
const userRouter = express.Router();
const User = require("../model/User");
const {body, validationResult} = require("express-validator");

userRouter.post("/createuser", body("email","Incorrect Email").isEmail(),body("password","Length should be 5").isLength({min: 5}), async(req,res)=>{
    const {name, email, password, location} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
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