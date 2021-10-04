const mongoose=require("mongoose");

//users Schema

const evaluationSchema= new mongoose.Schema({
    date:{type:String,required:true},
    instructor_name:{type:String,required:true}, 
    student:[{type:mongoose.Schema.Types.ObjectId,ref:"student",required:true}],
  },
  {
      timestamps:true
  }
  )
  
  
  // connect Schema to the post collecti
  module.exports=mongoose.model("evaluation",evaluationSchema);