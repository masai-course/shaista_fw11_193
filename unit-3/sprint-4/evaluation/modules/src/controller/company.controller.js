const express = require("express")


const router = express.Router();

const Company = require("../models/company.model");


router.post("",async(req,res) =>{
    const company = await Company.create(req.body);

    return res.status(200).send({company});
})

router.get("",async(req,res)=>{
    const company = await Company.find().populate({
        path:'city',
        select:'name'
    }).populate({
        path:'skills',
        select:'name'
    });

    return res.status(200).send({company});
})
router.delete("/:id",async(req,res)=>{
    const company = await Company.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send({company});
})
module.exports = router;