const express = require("express")


const router = express.Router();

const Company = require("../models/jobs.model");


router.post("",async(req,res) =>{
    const job = await Company.create(req.body);

    return res.status(200).send({job});
})

router.get("",async(req,res)=>{
    const job = await Company.find();

    return res.status(200).send({job});
})

module.exports = router;