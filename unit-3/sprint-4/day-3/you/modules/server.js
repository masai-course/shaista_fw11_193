const express=require("express");

const mongoose=require("mongoose");




const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/books");
};


//users Schema

const userSchema= new mongoose.Schema({
    id:{type:Number,required:true},
    first_name: {type:String,required:true},
    last_name: {type:String,required:true},
    email: {type:String,required:true},
    gender: {type:String,required:false}
})



// connect Schema to the user collections

const User=mongoose.model("user",userSchema);

//authors Schema

const authorSchema= new mongoose.Schema({
    first_name: {type:String,required:true},
    last_name: {type:String,required:true},
     id:{type:Number,required:true}
   
   
})



// connect Schema to the author collections

const Author=mongoose.model("author",authorSchema);

// Schema for section
const sectionSchema= new mongoose.Schema({
    body:{type:String,required:true},
     id:{type:Number,required:true}
    
})



// connect Schema to the user collections

const Section =mongoose.model("section",sectionSchema);


// Schema for books

const bookSchema= new mongoose.Schema({
    name:{type:String,required:true},
    section:{type:mongoose.Schema.Types.ObjectId,ref:"section",required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"author",required:true}

})



// connect Schema to the user collections

const Book =mongoose.model("book",bookSchema);

// Schema for checkout

const checkoutSchema= new mongoose.Schema({

    name: {type:String,required:true}
})



// connect Schema to the user collections

const Check =mongoose.model("checkout",checkoutSchema);






const app=express();

app.use(express.json());
  
  




//CURD APIS user

app.get("/users",async (req,res)=>{
    const user=await User.find();
    return res.status(200).send({user});
});

app.post("/users",async (req,res)=>{
    const user=await User.create(req.body);
    return res.status(201).send({user});
});

app.patch("/users/:id",async (req,res)=>{
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({user});
});

app.delete("/users/:id",async (req,res)=>{
    const user=await User.findByIdAndRemove(req.params.id).lean().exec();
    return res.status(200).send({user});
});

app.get("/users/:id",async (req,res)=>{
    const user=await User.findById(req.params.id).lean().exec();
    return res.status(200).send({user});
});



//CURD APIS for author

app.get("/authors",async (req,res)=>{
    const author=await Author.find();
    return res.status(200).send({author});
});

app.post("/authors",async (req,res)=>{
    const author=await Author.create(req.body);
    return res.status(201).send({author});
});

app.patch("/authors/:id",async (req,res)=>{
    const author=await Author.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({author});
});

app.delete("/authors/:id",async (req,res)=>{
    const author=await Author.findByIdAndRemove(req.params.id).lean().exec();
    return res.status(200).send({author});
});

app.get("/authors/:id",async (req,res)=>{
    const author=await Author.findById(req.params.id).lean().exec();
    return res.status(200).send({author});
});


// crud for section

app.get("/sections",async (req,res)=>{
    const section=await Section.find();
    return res.status(200).send({section});
});

app.post("/sections",async (req,res)=>{
    const section=await Section.create(req.body);
    return res.status(201).send({section});
});

app.patch("/sections/:id",async (req,res)=>{
    const section=await Section.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({section});
});

app.delete("/sections/:id",async (req,res)=>{
    const section=await Section.findByIdAndRemove(req.params.id).lean().exec();
    return res.status(200).send({section});
});

app.get("/sections/:id",async (req,res)=>{
    const section=await Section.findById(req.params.id).lean().exec();
    return res.status(200).send({section});
});



// crud for books

app.get("/books",async (req,res)=>{
    const book=await Book.find().populate("section").populate("author").lean().exec();;
    return res.status(200).send({book})
});

app.post("/books",async (req,res)=>{
    const book=await Book.create(req.body);
    return res.status(201).send({book});
});

app.patch("/books/:id",async (req,res)=>{
    const book=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({book});
});

app.delete("/books/:id",async (req,res)=>{
    const book=await Book.findByIdAndRemove(req.params.id).lean().exec();
    return res.status(200).send({book});
});

app.get("/books/:id",async (req,res)=>{
    const book=await Book.findById(req.params.id).lean().exec();
    return res.status(200).send({book});
});



// crud for checkout

app.get("/checkouts",async (req,res)=>{
    const check=await Check.find();
    return res.status(200).send({check});
});

app.post("/checkouts",async (req,res)=>{
    const check=await Check.create(req.body);
    return res.status(201).send({check});
});

app.patch("/checkouts/:id",async (req,res)=>{
    const check=await Check.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({check});
});

app.delete("/checkouts/:id",async (req,res)=>{
    const check=await Check.findByIdAndRemove(req.params.id).lean().exec();
    return res.status(200).send({check});
});

app.get("/checkouts/:id",async (req,res)=>{
    const check=await Check.findById(req.params.id).lean().exec();
    return res.status(200).send({check});
});




app.listen("3457",async function(){
    await connect();
    console.log("Listening port 3457");
})