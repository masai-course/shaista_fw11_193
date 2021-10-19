const express=require("express");

const register=require("./controllers/auth.controller")
const lecturerController=require("./controllers/lecturer.controller")


const app=express();
app.use(express.json());

app.use("/register",register);
app.use("/lectures",lecturerController);



module.exports=app;