async function getData(input){
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    let data = await res.json()
    let out = data.meals
    return out;
}

function append(data, place){
    data.forEach(({strMealThumb,strMeal,idMeal}) =>{
        let div = document.createElement("div");
        let p_name = document.createElement("p");
        let p_price = document.createElement("p");
        let img = document.createElement("img");
        img.src = strMealThumb

        p_name.innerText = `Name of the meal : ${strMeal}`
        p_price.innerText= `Id of the Meal : ${idMeal}`
        div.append(img,p_name,p_price);
        place.append(div);
    })
}




export {append, getData} ;