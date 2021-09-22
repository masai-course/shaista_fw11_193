const express=require('express')
const users=require("./express.json")

const app=express();
app.use(express.json())


app.use(logger)
//app.get("/",function(req,res){
  //  res.send("Welcome to Home page")
//});
app.get("/",function(req,res){
    res.send(users)
});



function logger(req,res,next){
    next()
}
app.post("/users",validate({name:"requried"}),  function(req,res){
   console.log(req.body)
    res.send(users)
})






function validate(data){
    return function(req, res, next){
        Object.keys(data).forEach(function (item){
            if(!req.query[item]){
                res.send(`please enter ${item} in the form`)
            }
        })
        next();
        
    }
}



app.listen(5431,function(){
    console.log("Listening port 5431");
})
