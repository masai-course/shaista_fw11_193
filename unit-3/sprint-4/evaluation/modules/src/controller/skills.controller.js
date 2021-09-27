const express = require("express")


const router = express.Router();

const Skill = require("../models/skills.model");


router.post("",async(req,res) =>{
    const skill = await Skill.create(req.body);

    return res.status(200).send({skill});
})

router.get("",async(req,res)=>{
    const skill = await Skill.find();

    return res.status(200).send({skill});
})

module.exports = router;