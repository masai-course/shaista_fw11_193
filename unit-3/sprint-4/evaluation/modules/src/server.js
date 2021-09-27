const express = require("express");

const connect = require("./configs/db");

const app = express();

app.use(express.json())


const jobcontroller = require("./controller/jobs.controller");
const citycontroller = require("./controller/city.controller");
const companycontroller = require("./controller/company.controller");
const skillcontroller = require("./controller/skills.controller");


app.use("/jobs",jobcontroller);
app.use("/citys",citycontroller);
app.use("/companys",companycontroller);
app.use("/skills",skillcontroller);



app.listen("4321",async function(){
    await connect();
    console.log("listen to 4321");
});