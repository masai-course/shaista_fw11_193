const app = require("./index");
const express = require("express");


const connect = require("./configs/db");

app.listen("3456",async function(){
    await connect();
    console.log("Runing POrt 3456");
})