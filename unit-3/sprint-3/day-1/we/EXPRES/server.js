const express=require('express')
const users=require("./user.json")

const app=express();


app.get("/",function(req,res){
    res.send("Welcome to Home page")
});
app.get("/users",function(req,res){
    res.send(users)
});



app.post("/users",validate({firstName:"requried"}),  function(req,res){
  //  console.log(name)
    res.send(users)
})

function validate(data){
    return function(req, res, next){
        Object.keys(data).forEach(function (item){
            if(!req.query[item]){
                res.send(`please enter ${item} in the form`)
            }
        })
    }
}


app.listen(7878,function(){
    console.log("Listening port 7878");
})
