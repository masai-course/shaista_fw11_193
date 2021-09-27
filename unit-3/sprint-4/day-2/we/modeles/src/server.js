const express = require("express");
const mongoose = require("mongoose");


const connect = require("./configs/db")

const app = express();

app.use(express.json());


const usercontroller = require("./controller/users.controller");
const postcontroller = require("./controller/post.controller");
const commentcontroller = require("./controller/comments.controller");
const tagcontroller = require("./controller/tag.controller");

app.use("/users", usercontroller);
app.use("/posts", postcontroller);
app.use("/comments", commentcontroller);
app.use("/tags",tagcontroller);

app.listen("2334", async function(){
    await connect();
    console.log("listen to 2334");
});