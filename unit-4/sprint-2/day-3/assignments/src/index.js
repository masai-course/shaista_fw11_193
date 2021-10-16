const express = require('express');

const products = require("./controllers/product.controller")


const app = express();

app.use(express.json());

app.use("/products", products);


module.exports = app;