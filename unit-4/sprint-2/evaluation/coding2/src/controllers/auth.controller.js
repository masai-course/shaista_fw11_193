const express=require("express")
const jwt = require("jsonwebtoken");

require("dotenv").config();
const path=require("path");
var fs=require('fs')
const upload=require("../middlewares/file-upload")

const router=express.Router();

const User = require("../models/user.model")

const newToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET_KEY);
}

router.post("/",upload.single("profile_pic"), async (req, res) => {

    let user;
    try {
        user = await User.findOne({email: req.body.email})
        if (user) return res.status(400).send({message: "Please check your email and password"});
        
        user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            profile_pic_url:req.file.path,
            role:req.body.role
        });
        
        const token = newToken(user)
        
        return res.status(200).send({user, token});

    } catch (err) {
        return res.status(500).send({message: "Sorry for inconvenience please try again later"});
    }
})
const DIR='src/uploads'
router.delete("/:id", async (req, res) => {
    const id=req.params.id;
    const out=await User.findOne({id:id});
    img=out.profile_pic_url
    fs.unlinkSync(img);
    const user=await User.findByIdAndDelete(req.param.id);
    return res.send({user})
})


router.get("/", async (req, res) => {
    const user=await User.find().lean().exec();
    return res.send({user})
})

router.post("/login", async (req, res) => {
    
    try {
        let user = await User.findOne({email: req.body.email});

        if(! user) return res.status(400).send({message: "Please check your email and password"});
    
        let match = user.checkPassword(req.body.password);
    

        if(! match) return res.status(400).send({message: "Please check your email and password"});
    
        const token = newToken(user)
        
        return res.status(200).send({user, token});

    } catch (err) {
        return res.status(500).send({message: "Sorry for inconvenience please try again later"});   
    }
})

module.exports = router;