const express = require("express")

const router = express.Router();


const User = require("../models/user.model.js");
// CRUD of users

router.post("", async(req,res) =>{
    const user = await User.create(req.body);

    return res.status(200).send({user});
})

router.get("", async(req,res) =>{
    const user = await User.find();

    return res.status(200).send({user});
})

router.delete("/:id", async(req,res) =>{
    const user = await User.findByIdAndRemove(req.params.id).lean().exec();

    return res.status(200).send({user});
})

router.patch("/:id", async(req,res) =>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

    return res.status(200).send({user});


})

router.get("/:id", async(req,res) =>{
    const user = await User.findById(req.params.id).lean().exec();

    return res.status(200).send({user});
})

module.exports = router;