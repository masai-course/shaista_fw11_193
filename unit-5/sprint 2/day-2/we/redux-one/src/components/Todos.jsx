import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {addTodo} from "../store/actions"

export const Todos = ()=>{
    const dispatch = useDispatch();
    const todos = useSelector((store) => store.todos);
    const [text,setText] = useState(" ");
    return (
        <div>
        <input type="text" placeholder="enter Todos" onChange ={(e) => setText(e.target.value)} />
        <button onClick={()=>{
            const payload={
                status:false,
                title:text
            }
            dispatch(addTodo(payload))
        }}> Add todo</button>
        {todos.map((e,i)=>(
            <div key={i}>{e.title}</div>

        ))}
        </div>
        
    )
}