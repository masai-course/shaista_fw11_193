function convert_digital_storage(bytes,type){
    if(type=="KB"){
        var out = Math.floor(bytes/1024);
        var rest=out+" "+type
        console.log(rest);
        return rest;
    }
    else if(type=="MB"){
        var out = Math.floor(bytes/(2*1024));
        var rest=out+" "+type
        console.log(rest);
        return rest;
    }
     else if(type=="GB"){
        var out = Math.floor(bytes/(3*1024));
        var rest=out+" "+type
        console.log(rest);
        return rest;
    }
     else if(type=="TB"){
        var out = Math.floor(bytes/(4*1024));
        var rest=out+" "+type
        console.log(rest);
        return rest;
    }
}
//convert_digital_storage(78000,"GB");
module.exports={convert_digital_storage}