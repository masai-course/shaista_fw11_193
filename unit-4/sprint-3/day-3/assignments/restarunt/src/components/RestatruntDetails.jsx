//import data from './data.json'
import { useEffect } from "react";
import { useState } from "react";
import "./rest.css"
const intial ={
     "payment_method":" ",
        "total_votes":" ",
        "reviews":" ",
        "cost_for_one":" ",
        "categories":" ",
        "rating":" ",
        "name":" ",
        "img":" "

}
export const Restaturnt = ()=>{
    const [formData, setFormData] = useState(intial);
     useEffect(() =>{
    fetch("http://localhost:3001/data")
    .then((d) => d.json())
    .then((res) =>{
      console.log("REs",res);
      setFormData(res);
    },[formData]);
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
         const {name,value} =e.target;
          setFormData({
            ...formData,
            [name]:value,
        })
    };

    return (
        <form onSubmit={handleSubmit}>

         <label for="html">
         Name of Restarunt
        <input
        name="name"
        onChange={handleChange}
        type="text"
        placeholder="Enter Restarunt Name"
        />
        </label>
       


        <label for="html">
        Type of food:
        <input
        name="categories"
        onChange={handleChange}
        type="text"
        placeholder="Enter categaries"
        />
        </label>
        



        <label for="html">
        Cost
        <input
        name="cost_for_one"
        onChange={handleChange}
        type="text"
        placeholder="Enter cost for one"
        />
        </label>


        <br/>
         <label for="html">
         Payment Method:
        <input
        name="payment_method"
        onChange={handleChange}
        type="text"
        placeholder="Enter Payment method "
        />
         </label>
        
         <label for="html">
         Votes
         <input
        name="total_votes"
        onChange={handleChange}
        type="text"
        placeholder="Enter votes"
        />
         </label>
        
         
         <label for="html">
         Reviews
          <input
        name="reviews"
        onChange={handleChange}
        type="text"
        placeholder="Enter reviews"
        />
         </label>
        
         <br/>
          <label for="html">
          Rating
           <input
        name="rating"
        onChange={handleChange}
        type="text"
        placeholder="Enter rating"
        />
          </label>

          <label for="html">
          Image
           <input
        name="img"
        onChange={handleChange}
        type="text"
        placeholder="Enter url of image"
        />
          </label>
        
        
        <br/>
        <br/>
        <button type="submit">Submit</button>
        <br/>
        <br/>
        </form>
    )
}