import { useState } from "react"
import { TodoInput } from "./TodoInput";

export const Todo = () =>{

    const [text,setText] = useState("");
    const [todos,setTodos] = useState([]);
    return <div>
    
    <input type="text" placeholder="Enter todo" onChange= {e => setText(e.target.value)} />
    <button onClick={()=>{
        setTodos([...todos,text])
    }}>add todo</button>
    {todos.map((e,i) => <TodoInput key={i} title={e}/>)}
    </div>
}