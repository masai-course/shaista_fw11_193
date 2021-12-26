var item = document.querySelector("#container")
var items = 1;
var load = function(){
    for(var i=0;i<25;i++){
        var item1 = document.createElement('p');
        item1.innerText=`Masai Students ${items++}`;
        item.appendChild(item1)
    }
}
item.addEventListener('scroll',function(){
    if(item.scrollTop + item.clientHeight >= item.scrollHeight){
        load();
    }
})
load();