const express=require("express");

const connect=require("./configs/db")

const app=require("./index")

app.listen(2111,async function(){
    await connect();
    console.log('Listening on port 2111');
})