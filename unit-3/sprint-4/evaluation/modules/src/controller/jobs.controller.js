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

router.get("/sortrating",async(req,res)=>{
    const job = await Job.find().sort("Rating");

    return res.status(200).send({job});
})
router.get("/workingcondition",async(req,res)=>{
    const job = await Job.find({"place":{$eq:"from home"}});

    return res.status(200).send({job});
})

router.get("/noticeperiod",async(req,res)=>{
    const job = await Job.find({"notice_period":{$eq:"2 months"}});

    return res.status(200).send({job});
})

router.patch("/:id",async(req,res)=>{
    const job = await Job.findByIdAndUpdate(req.params.id);

    return res.status(200).send({job});
})

router.get("",async(req,res)=>{
    const job = await Job.find();

    return res.status(200).send({job});
})

module.exports = router;