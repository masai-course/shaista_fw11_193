const express = require("express")

const mongoose = require("mongoose");

const router = express.Router();

const Job = 


router.post("",async(req,res) =>{
    const job = await Job.create(req.body);

    return res.status(200).send({job});
})

module.exports = router;