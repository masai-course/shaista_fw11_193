const app = require("./index")

const express = require("express")

const connect = require("./configs/db");

app.listen(5432, async function(){
    await connect();
    console.log("listening 5432");
})