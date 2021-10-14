const mongoose = require("mongoose")
const toDoSchema = new mongoose.Schema({
    name:{type:String,required:true},
    isComplete:{type:String,required:true},
    deadline:{type:Date,required:true}
},{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("toDo",toDoSchema);