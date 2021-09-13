async function getData(url){


    let res = await fetch(url)

    let data = await res.json()

    return data
}
function append(data, place){
    data.forEach(({strMealThumb,strMeal,idMeal}) =>{
        let div = document.createElement("div");
        let p_name = document.createElement("p");
        let p_price = document.createElement("p");
        let img = document.createElement("img");
        img.src = strMealThumb
        img.style.float="right"
        img.style.width="30%"
        img.style.margin="3%"
        p_name.innerText = `Name of the meal : ${strMeal}`
        p_price.innerText= `Id of the Meal : ${idMeal}`
        div.append(img,p_name,p_price);
        place.append(div);
    })
}
export {append, getData} ;