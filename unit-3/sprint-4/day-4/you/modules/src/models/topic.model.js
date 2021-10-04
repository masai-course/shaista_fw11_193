const mongoose = require("mongoose")

  

  const topicSchema= new mongoose.Schema({
    topic_name:{type:String,required:true},
    evaluation:{type:mongoose.Schema.Types.ObjectId,ref:"evaluation",required:true} 
  }
  )
  
  
  // connect Schema to the post collections
module.exports=mongoose.model("topic",topicSchema);