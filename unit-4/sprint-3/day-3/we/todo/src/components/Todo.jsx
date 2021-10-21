import { TodoTnput } from "./TodoInput";
import { useState } from "react";
import { TodoList } from "./TodoList";

export const Todos =()=>{
    const [todoList, setTodoList]= useState([]);

    const handleAddTodo = (todo) =>{
        setTodoList([...todoList,todo])
    }

 const handleToggle =(id)=>{
    const updatedList= todoList.map((e)=>{
if(todo.id==id){
    todo.states = !todoList
}
return todo;
     })

     setTodoList(updatedList);

 }
    return(
        <div>
            <TodoTnput handleAddTodo={handleAddTodo}/>
            <TodoList list={todoList} handleToggle={handleToggle}/>
        </div>
    )
}