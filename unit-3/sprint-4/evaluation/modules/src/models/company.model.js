const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    name_of_company:{type}
})


module.exports = mongoose.model("job",jobSchema);