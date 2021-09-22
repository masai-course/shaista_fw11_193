async function getData(url){


    let res = await fetch(url)

    let data = await res.json()

    return data
}
function append(data, place){


    data.forEach(({strMealThumb,strMeal,idMeal,strArea,strCategory,strInstructions}) =>{
        let div = document.createElement("div");

        let p_name = document.createElement("p");


        let p_price = document.createElement("p");
         let p_Area = document.createElement("p");


        let p_Categry = document.createElement("p");
        let p_instrct = document.createElement("p");
        let img = document.createElement("img");
        img.style.width="25%"
        img.style.float="left"
        img.style.margin="2%"

        img.src = strMealThumb

        p_name.innerText = `Name of the meal : ${strMeal}`
        p_price.innerText= `Id of the Meal : ${idMeal}`
        p_Area.innerText=`Area in which this meal is prepared is ${strArea}`
        p_Categry.innerText=`This meals comes in the Category of ${strCategory}`
        p_instrct.innerText=`Following are the Instructions to prepare this meal : 
        ${strInstructions}`
        
        div.append(img,p_name,p_price,p_Area,p_Categry,p_instrct);
        place.append(div);
    })
}




export {append, getData} ;