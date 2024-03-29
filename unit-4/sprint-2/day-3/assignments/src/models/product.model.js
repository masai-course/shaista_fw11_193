const mongoose = require("mongoose")
const toDoSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    rating:{type:Number,required:true}
},{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("toDo",toDoSchema);