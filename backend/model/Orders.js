const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    email : {type : String, required : true, unique : true},
    oredr_data : {type : Array, reuired: true}
})

const orderModel = mongoose.model("order_data",OrderSchema);

module.exports = orderModel;