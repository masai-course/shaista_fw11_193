const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    place:{type:String,required:true},
    notice_period:{type:String,required:true},
    Rating:{type:String,required:true}
})


module.exports = mongoose.model("job",jobSchema);