const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    id:{type:Number,required:true},
    first_name: {type:String,required:true},
    last_name: {type:String,required:true},
    gender: {type:String,required:true},
    date_of_birth:{type:String,required:false}
})

// connect Schema to the user collectio
module.exports=mongoose.model("user",userSchema);