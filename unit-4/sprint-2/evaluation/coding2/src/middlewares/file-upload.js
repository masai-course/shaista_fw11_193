const path=require('path');
const multer=require("multer");
var fs = require('fs')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.join(__dirname,"../uploads"));
    },
    filename:function(req,file,cb){
        const uniquePrefix=Date.now()+'-'+Math.round(Math.random()*1E9)
        cb(null,uniquePrefix+'-'+file.originalname)
    }
})

const fileFilter=(req,file,cb) => {
    if(file.mimetype=="image/jpeg" || file.mimetype=="image/png" ){
        cb(null,true)
    }else{
        cb(null,false)
    }
}


function getDestination (req, file, cb) {
    cb(null, '../uploads')
  }




module.exports=multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024 * 1024 * 5
    }
})


