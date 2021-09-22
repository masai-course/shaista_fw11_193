const express=require('express')
const users=require("./users.json")

const app=express();
app.use(express.json())

app.get("/users",function(req,res){
    res.send(users)
});
app.post("/users",validate,  function(req,res){
   console.log(req.body)
   const user = {
       Author: req.body.Author,
        book: req.body.book,
        publishes: req.body.publishes,
        pages: req.body.pages
   }
   users.push(user);
    res.json(user)
})

function validate(req,res,next){
    
        next();
    }




app.listen(8888,function(){
    console.log("Listening port 8888");
})
