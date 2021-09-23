const express = require("express");
const mongoose = require("mongoose");

const conncet = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/movies");
}

// creating blue print of movies

const moviesSchema = new mongoose.Schema({
    movies_name: {type:String,required:true},
    movies_genre: {type:String,required:true},
    production_year: {type:Number,required:false},
     budget: {type:Number,required:false}
})
//  "movies_name" : "Roxie Hart",
//         "movies_genre" : "Comedy",
//         "production_year" : 2005,
//         "budget" : 14234

// assign blue print to collections

const Movie = mongoose.model("movie",moviesSchema);

const app = express();
app.use(express.json());


//CRUD --> Create -->Read --->Update --->Delete


app.post("/movies", async(req,res) =>{
    const movie = await Movie.create(req.body);

    return res.status(200).send({movie});


})

app.get("/movies", async(req,res) =>{
    const movie = await Movie.find();

    return res.status(200).send({movie});


})

app.delete("/movies/:id", async(req,res) =>{
    const movie = await Movie.findById(req.params.id).lean().exec();

    return res.status(200).send({movie});


})
app.patch("/movies/:id", async(req,res) =>{
    const movie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

    return res.status(200).send({movie});


})

app.get("/movies/:id", async(req,res) =>{
    const movie = await Movie.findById(req.params.id).lean().exec();

    return res.status(200).send({movie});


})


app.listen("2334", async function(){
    await conncet();
    console.log("listen to 2334");
});