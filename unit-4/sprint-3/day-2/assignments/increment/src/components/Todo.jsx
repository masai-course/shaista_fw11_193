import { useState } from 'react';
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
    <div>
    {todos.map((e)=>(
            <div> {e}</div>
        ))}
    <input
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="Enter todo"
    
    
    />
    <button onClick={handleAdd}>Add todo</button>
    
    
    </div>
    )
}
export {Todo};