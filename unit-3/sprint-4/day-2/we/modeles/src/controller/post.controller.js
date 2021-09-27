const express = require("express")

const router = express.Router();


const Post = require("../models/post.model.js");

// CRUD of posts

router.post("", async(req,res) =>{
    const post = await Post.create(req.body);

    return res.status(200).send({post});


})

router.get("", async(req,res) =>{
    const post = await Post.find();

    return res.status(200).send({post});


})

router.delete("/:id", async(req,res) =>{
    const post = await Post.findById(req.params.id).lean().exec();

    return res.status(200).send({post});


})
router.patch("/:id", async(req,res) =>{
    const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

    return res.status(200).send({post});


})

router.get("/:id", async(req,res) =>{
    const post = await Post.findById(req.params.id).lean().exec();

    return res.status(200).send({post});


})
module.exports = router;