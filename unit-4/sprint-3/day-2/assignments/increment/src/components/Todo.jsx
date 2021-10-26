import { useState } from 'react';
import "./todo.css";
function Todo(){
    const [text, setText]= useState("");
    const [todos, SetTodos]=useState([]);

    const handleChange =(e) =>{
        setText(e.target.value);
    }
    const handleAdd =()=>{
        SetTodos([...todos,text]);
        setText("")
    }
    
    return (
    <div className="bc">
    {todos.map((e)=>(
        <>
            <div className="div">
             {e} 
             <button className="done"> </button>
              </div>
            
            </>
        ))}
    <input
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="Write something"

    
    
    />
    <button onClick={handleAdd}>+</button>
    
    
    </div>
    )
}
export {Todo};