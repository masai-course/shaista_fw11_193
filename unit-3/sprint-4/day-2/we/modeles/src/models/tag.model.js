const mongoose = require("mongoose");

// Schema for tags

const tagsSchema = new mongoose.Schema({
    name:{type:String,required:true}

})


// connect Schema to the comments collections
module.exports = mongoose.model("tag",tagsSchema);

