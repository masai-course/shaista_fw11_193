const mongoose = require("mongoose");

const user =require("./user.model");

const gallerySchema = new mongoose.Schema({
    picture:[{type:String,required:true}],
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
})

module.exports = mongoose.model("gallery",gallerySchema);