const express=require('express')
const users=require("./users.json")

const app=express();

app.get("/",function(req,res){
    res.send("Welcome to Home page")
});
app.get("/users",function(req,res){
    res.send(users)
});
app.listen(7888,function(){
    console.log("Listening port 7888");
})
