const express = require("express");
const register= require("./controllers/auth.controller");

const app = express();

app.use(express.json());


app.use("/",register);
module.exports =app;