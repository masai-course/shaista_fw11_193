
import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export const TodoTnput =({handleAddTodo}) =>{
    const [text,setText] = useState(""); 
    const handleChange =({target})=>{
        setText(target.value);
    }

    const handleClick =()=>{
        const data ={
            id: uuidv4(),
            title :text,
            state : false,
            color:"red"
        }
        handleAddTodo(data)
        setText("");
        }
    return (
        <>
            <input
            type="text"
            placeholder="Write Something"
            value={text}
            onChange={handleChange}
            />
            <button
            onClick={handleClick}>
            +
            </button>
        </>
    )

}