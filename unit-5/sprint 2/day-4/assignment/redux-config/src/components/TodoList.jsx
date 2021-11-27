import {useSelector} from "react-redux";
//mport {useState} from "react";
import "./componentStyle.css"
export const TodoList = () =>{
    const todo = useSelector((state)=>state.app.todo)  
    return <div id="TodoLayout">
        {
          todo.map(
            (item)=>
            <div >
            {item.title}
            </div>
        )
        }
        </div>
}