
import { useState } from "react";
export const Form = ()=>{
    const [formData, setFormData] = useState({
        username:"",
        age:"",
        email:"",
    })

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
    
        <input
        name="username"
        onChange={handleChange}
        type="text"
        placeholder="Enter username"
        />
        
        
         <input
        name="age"
        onChange={handleChange}
        type="text"
        placeholder="Enter user age"
        />
         <input
        name="email"
        onChange={handleChange}
        type="text"
        placeholder="Enter user mail"
        />
        <input type="submit">
    
        </input>
        </form>
    )
}