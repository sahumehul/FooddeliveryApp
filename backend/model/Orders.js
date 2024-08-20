const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    email : {type : String, required : true, unique : true},
    oredr_data : {type : arrayBuffer, }
})