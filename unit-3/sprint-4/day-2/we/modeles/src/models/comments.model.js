const mongoose = require("mongoose");

// Schema for comments 

const commentSchema = new mongoose.Schema({
    body:{type:String,required:true},
     post:{type:mongoose.Schema.Types.ObjectId, ref:"post",required:true},

})


// connect Schema to the comments collections
module.exports = mongoose.model("comment",commentSchema);
