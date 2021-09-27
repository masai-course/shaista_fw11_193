

const mongoose = require("mongoose");



// Schema of user
const userSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    first_name: {type:String,required:true},
    last_name: {type:String,required:true},
    email: {type:String,required:true},
    gender: {type:String,required:false}
})


// connect Schema to the user collections

module.exports = mongoose.model("user",userSchema);