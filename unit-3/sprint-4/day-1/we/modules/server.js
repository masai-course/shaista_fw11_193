const express = require("express");
const mongoose = require("mongoose");

const conncet = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/web11");
}

// creating blue print of products

const productSchema = new mongoose.Schema({
    name: {type:String,required:true},
    price: {type:Number,required:true},
    size: {type:String,required:false}
})

// assign blue print to collections

const Product = mongoose.model("product",productSchema);

const app = express();
app.use(express.json());


//CRUD --> Create -->Read --->Update --->Delete


app.post("/products", async(req,res) =>{
    const product = await Product.create(req.body);

    return res.status(200).send({product});


})

app.get("/products", async(req,res) =>{
    const product = await Product.find();

    return res.status(200).send({product});


})

app.delete("/products/:id", async(req,res) =>{
    const product = await Product.findById(req.params.id).lean().exec();

    return res.status(200).send({product});


})
app.patch("/products/:id", async(req,res) =>{
    const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

    return res.status(200).send({product});


})

app.get("/products/:id", async(req,res) =>{
    const product = await Product.findById(req.params.id).lean().exec();

    return res.status(200).send({product});


})


app.listen("2234", async function(){
    await conncet();
    console.log("listen to 2234");
});


