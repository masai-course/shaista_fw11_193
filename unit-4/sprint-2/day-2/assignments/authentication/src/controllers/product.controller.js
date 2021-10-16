const express = require('express');

const router = express.Router();

const Product = require("../models/product.model")

const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize');

router.get("/new", function(req, res) {
    return res.render("products/new")
})

router.get("/", authenticate, authorize(["user", "admin"]), async function(req, res) {
    const products = await Product.find().lean().exec();
    const user = req.user;

    delete user.password
    return res.send({products, user})
})

router.post("/", async function(req, res) {
    const products = await Product.create(req.body)
    const user = req.user;

   
    return res.send({products})
})

router.patch("/:id", authenticate, authorize(["seller", "admin"]), async function(req, res) {
    const products = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    const user = req.user;

    delete user.password
    return res.send({products, user})
})

router.delete("/:id", authenticate, authorize(["seller", "admin"]), async function(req, res) {
    const products = await Product.findByIdAndDelete(req.params.id).lean().exec();
    const user = req.user;

    delete user.password
    return res.send({products, user})
})

module.exports = router;