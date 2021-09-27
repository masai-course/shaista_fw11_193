const express = require("express")

const router = express.Router();

const Tag = require("../models/tag.model")
// CRUD of tags

router.post("", async(req,res) =>{
    const tags = await Tag.create(req.body);

    return res.status(200).send({tags});


})

router.get("", async(req,res) =>{
    const tags = await Tag.find();

    return res.status(200).send({tags});


})

router.delete("/:id", async(req,res) =>{
    const tags = await Tag.findById(req.params.id).lean().exec();

    return res.status(200).send({tags});


})
router.patch("/:id", async(req,res) =>{
    const tags = await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

    return res.status(200).send({tags});


})

router.get("/:id", async(req,res) =>{
    const tags = await Tag.findById(req.params.id).lean().exec();

    return res.status(200).send({tags});


})

module.exports = router;