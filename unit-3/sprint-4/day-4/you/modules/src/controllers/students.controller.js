const express = require("express");

const router = express.Router();

const Student = require("../models/student.model")

const Evaluation = require("../models/evaluation.model")
const User = require("../models/user.model.js")

//CRUD APIS for Comments

router.get("/",async (req,res)=>{
    const student=await Student.find().populate("user").lean().exec();
    return res.status(200).send({student});
});

router.post("/",async (req,res)=>{
    const student=await Student.create(req.body);
    return res.status(201).send({student});
});

router.patch("/:id",async (req,res)=>{
    const student=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({student});
});

router.delete("/students/:id",async (req,res)=>{
    const student=await Student.findByIdAndRemove(req.params.id).lean().exec();
    return res.status(200).send({student});
});

router.get("/students/:id",async (req,res)=>{
    const student=await Student.findById(req.params.id).lean().exec();
    return res.status(200).send({student});
});

 




/// get all comments for a post
router.get("/students/:id/evaluations", async(req,res)=>{
    const evaluations = await Evaluation.find({student:req.params.id}).lean().exec();
    const students=await StudentS.findById(req.params.id).lean().exec();

    return res.status(200).send({evaluations,students})

})
module.exports=router;