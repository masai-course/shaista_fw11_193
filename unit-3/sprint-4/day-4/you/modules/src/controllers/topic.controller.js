const express = require("express");

const router = express.Router();

const Topic = require("../models/topic.model");
const Evaluation = require("../models/evaluation.model")







//CRUD APIS for Comments

router.get("/",async (req,res)=>{
    const topic=await Topic.find().populate("evaluation").lean().exec();
    return res.status(200).send({topic});
});

router.post("/",async (req,res)=>{
    const topic=await Topic.create(req.body);
    return res.status(201).send({topic});
});

router.patch("/:id",async (req,res)=>{
    const topic=await Topic.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({topic});
});

router.delete("/:id",async (req,res)=>{
    const topic=await Topic.findByIdAndRemove(req.params.id).lean().exec();
    return res.status(200).send({topic});
});

router.get("/:id",async (req,res)=>{
    const topic=await Topic.findById(req.params.id).lean().exec();
    return res.status(200).send({topic});
});

module.exports=router;