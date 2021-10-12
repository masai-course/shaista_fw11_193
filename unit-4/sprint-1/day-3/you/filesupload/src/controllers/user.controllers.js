const express=require("express");
const path=require('path');
var fs = require('fs');
const upload=require("../middlewares/file-uploads")

//c
const router=express.Router();

const Product=require("../models/user.model");

router.post("/users",upload.single("profile_pic"),async function(req,res){
  const product=await Product.create({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    profile_pic:req.file.path
  })
  return res.status(201).send({product});
})
  router.get("/users", async (req, res) => { 
    const users = await Product.find().lean().exec();
    return res.send({users}); 
});
  router.get("/users/:id", async (req, res) => { 
    const users = await Product.find().lean().exec();
    return res.send({users}); 
});

const DIR = 'src/uploads';



router.delete('/users/:id',async function(req,res){
  const id = req.params.id;
  const out = await Product.findOne({id:id});
img = out.profile_pic
fs.unlinkSync(img);
  const use = await Product.findByIdAndDelete(req.params.id)

  
  return res.send({use});
})





router.patch("/users/:id",  upload.single('profile_pic'), async (req, res) => {
const id = req.params.id;
const body = req.body;
const out = await Product.findOne({id:id});
img = out.profile_pic
fs.unlinkSync(img);
const first_name = body.first_name;
const last_name = body.last_name;
const profile_pic = req.file.path;
await Product.findOneAndUpdate(id,
  {
    $set: {
      first_name,
      last_name,
      profile_pic
    }
  },
  { new: true }
).then(post => {
    return res.status(100).send("done");
    
  })
  .catch(err => {
    return res.status(100).send('Unable to edit article');
  }); 
  });


module.exports=router;