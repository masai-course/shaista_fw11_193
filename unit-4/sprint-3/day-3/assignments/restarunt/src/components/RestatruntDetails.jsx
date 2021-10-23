//import data from './data.json'
import { useState } from "react";
import "./rest.css"
export const Restaturnt = ()=>{
    const [formData, setFormData] = useState({
        "payment_method":" ",
        "total_votes":" ",
        "reviews":" ",
        "cost_for_one":" ",
        "categories":" ",
        "rating":" ",
        "name":" ",
        "img":" "

    })
  //  setFormData(data);

    const handleChange =(e) =>{
        const {name,value} =e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>

         <label for="html">Name of Restarunt</label>
        <input
        
        name="name"
        onChange={handleChange}
        type="text"
        placeholder="Enter Restarunt Name"
        />
         <label for="html">Type of food:</label>
         <input
        name="categories"
        onChange={handleChange}
        type="text"
        placeholder="Enter categaries"
        />
         <label for="html">Cost</label>
        <input
        name="cost_for_one"
        onChange={handleChange}
        type="text"
        placeholder="Enter cost for one"
        />
        <br/>
         <label for="html">Payment Method:</label>
        <input
        name="payment_method"
        onChange={handleChange}
        type="text"
        placeholder="Enter Payment method "
        />
         <label for="html">Votes</label>
        
         <input
        name="total_votes"
        onChange={handleChange}
        type="text"
        placeholder="Enter votes"
        />
         <label for="html">Reviews</label>
         <input
        name="reviews"
        onChange={handleChange}
        type="text"
        placeholder="Enter reviews"
        />
        
          <label for="html">Rating</label>
        
         <input
        name="rating"
        onChange={handleChange}
        type="text"
        placeholder="Enter rating"
        />
        <br/>
        <br/>
        <button type="submit">Submit</button>
        <br/>
        <br/>
        </form>
    )
}