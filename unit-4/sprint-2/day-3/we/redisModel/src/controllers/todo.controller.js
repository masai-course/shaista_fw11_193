const express = require("express");
const router = express.Router();
const todo = require("../models/todo.model")

const redis = require("../configs/redis");

router.get("",(req,res)=>{
    redis.get("ToDoList", async function(err,ToDo){
        console.log("ToDo",ToDo);
    
    if(err) console.log(err);
    if(ToDo) return res.status(200).send(ToDo);


    const ToDoList = await todo.find().lean().exec();

    redis.set("ToDoList",JSON.stringify(ToDoList));

    return res.status(200).send(ToDoList)
    })
})

router.post("",async function(req,res){
    const ToDoList = await todo.create(req.body);

    const ToDoLists = await todo.find().lean().exec();

    redis.set("ToDoLists", JSON.stringify(ToDoLists));

    return res.status(201).send(ToDoList);

})

module.exports = router;