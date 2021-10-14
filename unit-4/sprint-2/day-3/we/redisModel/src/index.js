const express = require('express');

const todo = require("./controllers/todo.controller")


const app = express();

app.use(express.json());

app.use("/todo", todo);


module.exports = app;