const express = require("express");
const foodRouter = express.Router();


foodRouter.post("/getdata",async (req,res)=>{
    try{
        
        console.log(global.food_items);
        res.send([global.food_items]);
    }catch(err){
        console.error(err);
        res.send("Server Error")
    }
})

module.exports = foodRouter;