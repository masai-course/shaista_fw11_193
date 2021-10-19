const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user.model")
const express = require("express");
const router = express.Router();
const path=require('path');
var fs = require('fs');
const upload=require("../middlewares/files-uploads")
const newToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET_KEY);
}

router.post("/register",upload.single("profile_photo_url"),async (req, res) => {
       

    let user;
    try {
        user = await User.findOne({email: req.body.email})
         console.log(user);
        if (user) return res.status(400).send({message: "user already exits"});
        
        user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        profile_photo_url:req.file.path,
        roles:req.body.roles
        });
        const token = newToken(user)
        
        return res.status(200).send({user, token});

    } catch (err) {
        return res.status(500).send({message: "Sorry for inconvenience please try again later"});
    }
});

router.post("/",async (req, res) => {
    
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
});

module.exports = router;
