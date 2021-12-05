import axios from 'axios';
import {useState} from 'react';
import "./MealStyle.css";
export function Meal(){
    const [name,setName] = useState("");
    const [data,setData] = useState([]);
    const handleSearch=(name)=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).then((response)=>
            setData(response.data.meals)
        )
    }
    return <div>
        <input type="text" placeholder="Enter the name of food items"onChange={(e)=>setName(e.target.value)}/>
        <button  onClick={()=>handleSearch(name)}>Search</button>
        {data.map(e=>(<div id="box_layout">
            <img  src={e.strMealThumb} alt="fooditemimage"/>
            <div >
                <div>{`Meal ID : ${e.idMeal}`}</div>
                <h2>{`Meal Name : ${e.strMeal}`}</h2>
                <div>{`Meal Item Area : ${e.strArea}`}</div>
                <div>{`Meal Category : ${e.strCategory}`}</div>
                <ol >
                    <li>{`Ingredients1 : ${e.strIngredient1}`}</li>
                    <li>{`Ingredients2 : ${e.strIngredient2}`}</li>
                    <li>{`Ingredients3 : ${e.strIngredient3}`}</li>
                </ol>
                <div>{`Description : ${e.strInstructions}`}</div>
            </div>
        </div>))}
    </div>
}