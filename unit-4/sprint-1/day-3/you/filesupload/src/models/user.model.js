const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    first_name:{type:String, required:true},
    last_name:{type:String,required:true},
    profile_pic:{type:String,required:true}
})

module.exports = mongoose.model("product",productSchema);