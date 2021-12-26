var item = document.getElementById("container")
var count = 1;
var load = function(){
    for(var i=0;i<25;i++){
        var item1 = document.createElement('p');
        item1.innerText=`Masai Students ${count++}`;
        item.appendChild(item1)
    }
}
document.getElementById("container").addEventListener('scroll',function(){
    if(item.scrollTop + item.clientHeight >= item.scrollHeight){
        load();
    }
})
load();