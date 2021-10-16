const express = require("express");
const router = express.Router();
const Product = require("../models/product.model")

const redis = require("../configs/redis");

router.get("",(req,res)=>{
    redis.get("products", async function(err,products){
        console.log("products",products);
    
    if(err) console.log(err);
    if(products) return res.status(200).send(products);


    const productss = await Product.find().lean().exec();

    redis.set("products",JSON.stringify(productss));

    return res.status(200).send(products)
    })
})

router.get("/:id",(req,res)=>{
    redis.get(`products.${req.params.id}`, async function(err,products){
    
    
    if(err) console.log(err);
    if(products) return res.status(200).send(products);


    const productss = await Product.findById(req.params.id).lean().exec();

    redis.set(`products.${req.params.id}`,JSON.stringify(productss));

    return res.status(200).send(products)
    })
})

router.post("",async function(req,res){
    const product = await Product.create(req.body);

    const productss = await Product.find().lean().exec();
    redis.set("products", JSON.stringify(productss));

    return res.status(201).send(product);

})
router.delete("/:id",async(req,res)=>{
    const products = await Product.findByIdAndDelete(req.params.id).lean().exec();

    redis.del(`products.${req.params.id}`);

    const productss = await Product.find().lean().exec();
    redis.set("products",JSON.stringify(productss));
    return res.status(200).send(products)

})

router.patch("/:id",async (req,res)=>{
     const products = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
     redis.set(`products.${req.params.id}`, JSON.stringify(products));

      const productss = await Product.find().lean().exec();
    redis.set("products",JSON.stringify(productss));
    return res.status(201).send(products)
});
module.exports = router;