const express=require("express");

//const mongoose=require("mongoose");






const connect=require("../configs/db.js")
const app=express();

app.use(express.json());
  
  
const usercontroller = require("./controllers/users.contoller.js");
const evaluationcontroller = require("./controllers/evaluation.controller");
const studentcontroller = require("./controllers/students.controller");
const topiccontroller = require("./controllers/topic.controller");

app.use("/users", usercontroller);
app.use("/evaluations", evaluationcontroller);
app.use("/students", studentcontroller);
app.use("/topics",topiccontroller);






// to get all post of users




app.listen("8765",async function(){
    await connect();
    console.log("Listening port 8765");
})




































// const express=require("express");

// const mongoose=require("mongoose");




// const connect=()=>{
//     return mongoose.connect("mongodb://127.0.0.1:27017/users");
// };

// //users Schema

// const userSchema= new mongoose.Schema({
 
//     first_name: {type:String,required:true},
//     last_name: {type:String,required:true},
//     date_of_birth: {type:String,required:true},
//     gender: {type:String,required:false}
// })



// // connect Schema to the user collections

// const User=mongoose.model("user",userSchema);



// //studentss Schema

// const studentsSchema= new mongoose.Schema({
 
//     roll_id: {type:Number,required:true},
//     batch_name: {type:String,required:true},

// })



// // connect Schema to the user collections

// const Student=mongoose.model("user",studentsSchema);

// const app=express();

// app.use(express.json());
  
  

// //CURD APIS for users

// app.get("/users",async (req,res)=>{
//     const user=await User.find();
//     return res.status(200).send({user});
// });

// app.post("/users",async (req,res)=>{
//     const user=await User.create(req.body);
//     return res.status(201).send({user});
// });

// app.patch("/users/:id",async (req,res)=>{
//     const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
//     return res.status(200).send({user});
// });

// app.delete("/users/:id",async (req,res)=>{
//     const user=await User.findByIdAndRemove(req.params.id).lean().exec();
//     return res.status(200).send({user});
// });

// app.get("/users/:id",async (req,res)=>{
//     const user=await User.findById(req.params.id).lean().exec();
//     return res.status(200).send({user});
// });


// //CURD APIS for students

// app.get("/students",async (req,res)=>{
//     const students=await Student.find();
//     return res.status(200).send({students});
// });

// app.post("/students",async (req,res)=>{
//     const students=await Student.create(req.body);
//     return res.status(201).send({students});
// });

// app.patch("/students/:id",async (req,res)=>{
//     const students=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
//     return res.status(200).send({students});
// });

// app.delete("/students/:id",async (req,res)=>{
//     const students=await Student.findByIdAndRemove(req.params.id).lean().exec();
//     return res.status(200).send({students});
// });

// app.get("/students/:id",async (req,res)=>{
//     const students=await Student.findById(req.params.id).lean().exec();
//     return res.status(200).send({students});
// });

// //CURD APIS for students

// app.get("/evalutions",async (req,res)=>{
//     const evalutions=await Student.find();
//     return res.status(200).send({evalutions});
// });

// app.post("/evalutions",async (req,res)=>{
//     const evalutions=await Student.create(req.body);
//     return res.status(201).send({evalutions});
// });

// app.patch("/evalutions/:id",async (req,res)=>{
//     const evalutions=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
//     return res.status(200).send({evalutions});
// });

// app.delete("/evalutions/:id",async (req,res)=>{
//     const evalutions=await Student.findByIdAndRemove(req.params.id).lean().exec();
//     return res.status(200).send({evalutions});
// });

// app.get("/evalutions/:id",async (req,res)=>{
//     const evalutions=await Student.findById(req.params.id).lean().exec();
//     return res.status(200).send({evalutions});
// });









// app.listen("4567",async function(){
//     await connect();
//     console.log("Listening port 3457");
// })