
const mongoose = require("mongoose");


// Schema of posts

const postSchema = new mongoose.Schema({
    title: {type:String,required:true},
    body: {type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId, ref:"user",required:true},
    tag:[{type:mongoose.Schema.Types.ObjectId, ref:"tags",required:true}]
})


// connect Schema to the post collections

module.exports = mongoose.model("post",postSchema);
