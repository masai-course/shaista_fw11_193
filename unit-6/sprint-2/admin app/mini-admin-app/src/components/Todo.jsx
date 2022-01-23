import { useState } from "react"
//import "./style.css"
function Todo()
{
    const [text,setText]=useState("");
    const [todos,setTodos]=useState([]);
    const handelChange = (e) =>{
        setText(e.target.value);
    }

    const handleTodo= () =>{
        setTodos([...todos, text]);
        setText("");
    }
    return (
        <div className="maindiv">
            <input value={text} type="text" onChange={handelChange} placeholder="Enter Task"/>
            <button onClick={handleTodo}>Add Task</button>
            {
                todos.map((e) =>(
                    <div className="showTask">{e}</div>
                ))
            }
        </div>
    )
}
export {Todo}