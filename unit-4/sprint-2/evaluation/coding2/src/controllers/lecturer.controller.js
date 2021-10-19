const express=require("express");


const router=express.Router();

const Lecturer = require("../models/lecturer.model")
const user = require("../models/user.model")

const authenticate=require("../middlewares/authenticate");
const authorize=require("../middlewares/authorize")

router.post("/",async function(req,res){
    const lecturer=await Lecturer.create(req.body)
    const user=req.user;
    return res.send({lecturer})
})

router.get("/",async function(req,res){
    const lecturer=await Lecturer.find().lean().exec();
    const user=req.user;
    
    return res.send({lecturer,user})
})

router.get("/:id",async function(req,res){
    const lecturer=await Lecturer.find().lean().exec();
    const user=req.user;
    
    return res.send({lecturer,user})
})

router.patch("/:id",authenticate,authorize(["instructor","admin"]), async function(req,res){
    const lecturer=await Lecturer.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    const user=req.user;
    delete user.password
    return res.send({lecturer,user})
})

router.delete("/:id",authenticate,authorize(["instructor","admin"]), async function(req,res){
    const lecturer=await Lecturer.findByIdAndDelete(req.params.id).lean().exec();
    const user=req.user;
    delete user.password
    return res.send({lecturer,user})
})


module.exports=router;