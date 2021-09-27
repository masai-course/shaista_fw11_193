const express = require("express");

const connect = require("./configs/db");

const app = express();

app.use(express.json())


const jobcontroller = require("./controller/jobs.controller");
app.use("/jobs",jobcontroller);



app.listen("4321",async function(){
    await connect();
    console.log("listen to 4321");
});