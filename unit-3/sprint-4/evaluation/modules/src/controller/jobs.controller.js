const express = require("express")


const router = express.Router();

const Job = require("../models/jobs.model");


router.post("",async(req,res) =>{
    const job = await Job.create(req.body);

    return res.status(200).send({job});
})

router.get("",async(req,res)=>{
    const job = await Job.find();

    return res.status(200).send({job});
})

module.exports = router;