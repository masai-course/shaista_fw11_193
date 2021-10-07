const express=require("express");

const nodemailer=require("nodemailer");
const router=express.Router();

const User=require("../models/user.model");

router.get("",async function(req,res){
    const page=+req.query.page || 1;
    const size=+req.query.size || 10;

    const offset=(page-1) *size;

    const users=await User.find().skip(offset).limit(size).lean().exec();

    const totalUserCount=await User.find().countDocuments();
    const totalpages=Math.ceil(totalUserCount/size);

    const firstname=req.query.first_name;
    const lastname=req.query.last_name;
    const mail=req.query.email;
    var array=["as@gmail.com","sd@gmail.com","wes@gmail.com","qwsx@gmail.com","pos@gmail.com"]

    var message = {
        from: "shaista@gmail.com",
        to: mail,
        subject: " Welcome to ABC system"+firstname+lastname,
        text: " Hi"+firstname+", Please confirm your email address",
        html: "<p>HTML version changed</p>"
      };
      
      


    const transporter=nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "c2dcf7e934b25b",
          pass: "c8bb79e8895e9f",
        },
      });

      for(var i=0;i<5;i++){
      var message1 = {
       
        from: "shaista@gmail.com",
        to: array[i],
        subject: firstname+lastname+"has registered with us",
        text: " Please welcome"+firstname+lastname,
        html: "<p>HTML ADMINS again</p>"
        }
       transporter.sendMail(message1);
      }

      transporter.sendMail(message);
      

    return res.send({users,totalpages});
})

router.post("",async function(req,res){
  const users=await User.create(req.body);
  return res.status(201).send({users});
})

module.exports=router;