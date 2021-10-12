const express = require("express");
const productController = require("./controllers/user.controllers");
const gallery = require("./controllers/gallery.controller")
 const app = express();

 app.use(express.json())
 app.use("/", productController);
    app.use("/",gallery)
 module.exports =app;