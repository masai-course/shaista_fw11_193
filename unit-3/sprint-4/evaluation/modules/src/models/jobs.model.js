const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title:{type:String,required:true},
    place:{type:String,required:true},
    notice_period:{type:String,required:true},
    Rating:{type:Number,required:true},
    skills:{type:mongoose.Schema.Types.ObjectId,ref:"skill",required:true},
     city:{type:mongoose.Schema.Types.ObjectId,ref:"city",required:true}
})


module.exports = mongoose.model("job",jobSchema);