const mongoose=require("mongoose");

//studentss Schema

const studentSchema= new mongoose.Schema({
    id:{type:Number,required:true},
    batch:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
  })
  
  
  // connect Schema to the students collections
module.exports=mongoose.model("student",studentSchema);