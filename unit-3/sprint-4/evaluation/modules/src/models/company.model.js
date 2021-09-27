const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name_of_company:{type:String,required:true},
    city:{type:mongoose.Schema.Types.ObjectId,ref:"city",required:true},
     skills:{type:mongoose.Schema.Types.ObjectId,ref:"skill",required:true}
})


module.exports = mongoose.model("company",companySchema);