const mongoose = require("mongoose");

const lectSchema = new mongoose.Schema({
    
    title:{type:String,required:true},
    instructor:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    batch:{type:String,required:true}
})

module.exports = mongoose.model('lect',lectSchema);