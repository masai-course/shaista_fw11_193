import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export const TodoTnput =({handleAddTodo}) =>{
    const [text,setText] = useState(""); 
    const [text1,setText1] = useState(""); 
    const handleChange1 =({target})=>{
        setText(target.value);
      
    }
     const handleChange2 =({target})=>{
        
        setText1(target.value);
    }

    const handleClick =()=>{
        const data ={
            id: uuidv4(),
            title :text,
            title1:text1,
            status : false,
            Dec:"none"
        }
        handleAddTodo(data)
        setText("");
        setText1("");
        }
    return (
        <>
            <input
            type="text"
            placeholder="Write Something"
            
            value={text}
            onChange={handleChange1}
            />
            <input
            type="text"
            placeholder="Write Something"
            value={text1}
            onChange={handleChange2}
            />
            <button className="btn"
            onClick={handleClick}>
            +
            </button>
        </>
    )

}