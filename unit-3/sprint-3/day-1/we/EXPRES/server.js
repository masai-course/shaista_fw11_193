const express=require('express')
const users=require("./user.json")

const app=express();

app.get("/",function(req,res){
    res.send("Welcome to Home page")
});
app.get("/users",function(req,res){
    res.send(users)
});
app.listen(7878,function(){
    console.log("Listening port 7878");
})
