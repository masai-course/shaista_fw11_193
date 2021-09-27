const express = require("express")

const router = express.Router();

const Comment = require("../models/comments.model")
// CRUD of comments

router.post("", async(req,res) =>{
    const comments = await Comment.create(req.body);

    return res.status(200).send({comments});


})

router.get("", async(req,res) =>{
    const comments = await Comment.find();

    return res.status(200).send({comments});


})

router.delete("/:id", async(req,res) =>{
    const comments = await Comment.findById(req.params.id).lean().exec();

    return res.status(200).send({comments});


})
router.patch("/:id", async(req,res) =>{
    const comments = await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

    return res.status(200).send({comments});


})

router.get("/:id", async(req,res) =>{
    const comments = await Comment.findById(req.params.id).lean().exec();

    return res.status(200).send({comments});


})
module.exports = router;
