const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    roll_no:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    batch:{type:String,required:true}
})

module.exports=mongoose.model('student',studentSchema);