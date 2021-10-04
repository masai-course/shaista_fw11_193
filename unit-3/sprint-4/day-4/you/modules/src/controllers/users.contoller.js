const express = require("express");

const router = express.Router();

const User = require("../models/user.model.js")

const Student = require("../models/student.model.js")


//CURD APIS

router.get("/",async (req,res)=>{
    const user=await User.find();
    return res.status(200).send({user});
});


router.post("/",async (req,res)=>{
    const user=await User.create(req.body);
    return res.status(201).send({user});
});



router.patch("/:id",async (req,res)=>{
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({user});
});

router.delete("/:id",async (req,res)=>{
    const user=await User.findByIdAndRemove(req.params.id).lean().exec();
    return res.status(200).send({user});
});

router.get("/:id",async (req,res)=>{
    const user=await User.findById(req.params.id).lean().exec();
    return res.status(200).send({user});
});

router.get("/:id/students", async(req,res)=>{
    const students = await Student.find({user:req.params.id}).lean().exec();
    const users=await User.findById(req.params.id).lean().exec();

    return res.status(200).send({students,users})

})

module.exports=router;