const mongoose=require("mongoose");
const bcryptjs=require('bcryptjs');

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minLength:8,maxLength:18},
    profile_pic_url:{type:String,required:true},
    role:[{type:String,required:true}]},{
        versionKey:false,
        timestamps:true
})

userSchema.pre("save", function(next) {
    if(! this.isModified("password")) return next();

    const hash = bcryptjs.hashSync(this.password, 8);
    this.password = hash

    return next();
})

userSchema.methods.checkPassword = function(password) {
    const match = bcryptjs.compareSync(password, this.password);

    return match;
}

// step 2 :- connect the schema to the users collection


module.exports=mongoose.model('user',userSchema);