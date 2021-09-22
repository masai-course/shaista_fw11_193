const express = require("express");
const mongoose = require("mongoose");

const conncet = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/application");
}

// Schema of user

const userSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    first_name: {type:String,required:true},
    last_name: {type:String,required:true},
    email: {type:Number,required:true},
    gender: {type:String,required:false}
})


// connect Schema to the user collections

const User = mongoose.model("user",userSchema);

const app = express();

app.use(express.json());


// Schema of posts

const postSchema = new mongoose.Schema({
    title: {type:String,required:true},
    body: {type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId, ref:"user",required:true},
    tag:{type:mongoose.Schema.Types.ObjectId, ref:"tags",required:true}
})


// connect Schema to the post collections

const Post = mongoose.model("post",postSchema);


// Schema for comments 

const commentSchema = new mongoose.Schema({
    body:{type:String,required:true},
     post:{type:mongoose.Schema.Types.ObjectId, ref:"post",required:true},

})


// connect Schema to the comments collections
const Comment = mongoose.model("comment",commentSchema);

// Schema for tags

const tagsSchema = new mongoose.Schema({
    name:{type:String,required:true}

})


// connect Schema to the comments collections
const Tag = mongoose.model("tag",tagsSchema);




// CRUD of users

app.post("/users", async(req,res) =>{
    const user = await User.create(req.body);

    return res.status(200).send({user});


})

app.get("/users", async(req,res) =>{
    const user = await User.find();

    return res.status(200).send({user});


})

app.delete("/users/:id", async(req,res) =>{
    const user = await User.findById(req.params.id).lean().exec();

    return res.status(200).send({user});


})
app.patch("/users/:id", async(req,res) =>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

    return res.status(200).send({user});


})

app.get("/users/:id", async(req,res) =>{
    const user = await User.findById(req.params.id).lean().exec();

    return res.status(200).send({user});


})


// CRUD of posts

app.post("/posts", async(req,res) =>{
    const post = await User.create(req.body);

    return res.status(200).send({post});


})

app.get("/posts", async(req,res) =>{
    const post = await Post.find();

    return res.status(200).send({post});


})

app.delete("/posts/:id", async(req,res) =>{
    const post = await Post.findById(req.params.id).lean().exec();

    return res.status(200).send({post});


})
app.patch("/posts/:id", async(req,res) =>{
    const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

    return res.status(200).send({post});


})

app.get("/posts/:id", async(req,res) =>{
    const post = await Post.findById(req.params.id).lean().exec();

    return res.status(200).send({post});


})


// CRUD of comments

app.post("/comments", async(req,res) =>{
    const comments = await Comment.create(req.body);

    return res.status(200).send({comments});


})

app.get("/comments", async(req,res) =>{
    const comments = await Comment.find();

    return res.status(200).send({comments});


})

app.delete("/comments/:id", async(req,res) =>{
    const comments = await Comment.findById(req.params.id).lean().exec();

    return res.status(200).send({comments});


})
app.patch("/comments/:id", async(req,res) =>{
    const comments = await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

    return res.status(200).send({comments});


})

app.get("/comments/:id", async(req,res) =>{
    const comments = await Comment.findById(req.params.id).lean().exec();

    return res.status(200).send({comments});


})



// CRUD of tags

app.post("/tags", async(req,res) =>{
    const tags = await Tag.create(req.body);

    return res.status(200).send({tags});


})

app.get("/tags", async(req,res) =>{
    const tags = await Tag.find();

    return res.status(200).send({tags});


})

app.delete("/tags/:id", async(req,res) =>{
    const tags = await Tag.findById(req.params.id).lean().exec();

    return res.status(200).send({tags});


})
app.patch("/tags/:id", async(req,res) =>{
    const tags = await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

    return res.status(200).send({tags});


})

app.get("/tags/:id", async(req,res) =>{
    const tags = await Tag.findById(req.params.id).lean().exec();

    return res.status(200).send({tags});


})


app.listen("2334", async function(){
    await conncet();
    console.log("listen to 2234");
});