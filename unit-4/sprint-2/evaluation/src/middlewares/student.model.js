const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    
    roll_number:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    batch:{type:String,required:true}
})

module.exports = mongoose.model('lect',StudentSchema);