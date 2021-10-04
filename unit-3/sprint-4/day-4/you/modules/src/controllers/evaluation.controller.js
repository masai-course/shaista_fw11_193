const express = require("express");

const router = express.Router();

const Evaluation = require("../models/evaluation.model")
const Student = require("../models/student.model")
const Topic = require("../models/topic.model")
//const User = require("../models/users.model.js")
const User = require("../models/user.model.js")

//CRUD APIS for post


router.get("/",async (req,res)=>{
    const evaluation=await Evaluation.find().populate("student")
    return res.status(200).send({evaluation});
});

router.post("/",async (req,res)=>{
    const evaluation=await Evaluation.create(req.body);
    return res.status(201).send({evaluation});
});

router.patch("/:id",async (req,res)=>{
    const evaluation=await Evaluation.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({evaluation});
});

router.delete("/:id",async (req,res)=>{
    const evaluation=await Evaluation.findByIdAndRemove(req.params.id).lean().exec();
    return res.status(200).send({evaluation});
});

router.get("/:id",async (req,res)=>{
    const evaluation=await Evaluation.findById(req.params.id).lean().exec();
    return res.status(200).send({evaluation});
});

module.exports = router;