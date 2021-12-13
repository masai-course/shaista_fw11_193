function convert_digital_storage(bytes,type){
    if(type=="KB"){
        var out = Math.floor(bytes/1000);
        var rest=out.toFixed(3)+" "+type
        console.log(rest);
        return rest;
    }
    else if(type=="MB"){
        var out = (bytes*(10**-6));
        var rest=out.toFixed(3)+" "+type
        console.log(rest);
        return rest;
    }
     else if(type=="GB"){
        var out = (bytes/(1073741824));
        var rest=out.toFixed(3)+" "+type
        console.log(rest);
        return rest;
    }
     else if(type=="TB"){
        var out = (bytes/1099511627776);
        var rest=out.toFixed(3)+" "+type
        console.log(rest);
        return rest;
    }
}
//convert_digital_storage(3244277000,"TB");
module.exports={convert_digital_storage}