const express=require("express");
const path=require('path');
var fs = require('fs');
const upload=require("../middlewares/file-uploads")

//c
const router=express.Router();

const Gallery=require("../models/gallery.model");

router.post("/gallery",upload.array("picture",5),async function(req,res){
  const filePaths=req.files.map(file => file.path)
  const gallery=await Gallery.create({
    user_id:req.body.user_id,
    picture:filePaths
  })
  return res.status(201).send({gallery});
})
router.delete('/gallery/:id',async function(req,res){
  
  const id = req.params.id;
  const out = await Gallery.findOne({id:id});

  for(let i=0;i<5;i++){
      img = out.picture[i]
      fs.unlinkSync(img);
  }
  const use = await Gallery.findByIdAndDelete(req.params.id)

  
  return res.send({use});

})
module.exports=router;


