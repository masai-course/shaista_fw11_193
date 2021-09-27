const express = require("express")


const router = express.Router();

const City = require("../models/city.model");


router.post("",async(req,res) =>{
    const city = await City.create(req.body);

    return res.status(200).send({city});
})

router.get("",async(req,res)=>{
    const city = await City.find();

    return res.status(200).send({city});
})

router.delete("/:id",async(req,res)=>{
    const city = await City.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send({city});
})

module.exports = router;