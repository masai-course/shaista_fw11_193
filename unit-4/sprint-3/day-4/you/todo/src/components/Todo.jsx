import { TodoTnput } from "./TodoInput";
import { useState } from "react";
import { TodoList } from "./TodoList";


export const Todos =()=>{
    const [todoList, setTodoList]= useState([]);
    

    const handleAddTodo = (todo) =>{
        setTodoList([...todoList,todo])
    }

 const handleToggle =(id)=>{
    const updatedList= todoList.map((todo)=>{
if(todo.id===id){
    todo.state = !todo.state
    if(todo.Dec==="none"){
        todo.Dec="line-through"
    }
    else{
        todo.Dec=("none")

    }
     
   // color="green"?setColor("red"):setColor("green")
}

   

return todo;
     })

     setTodoList(updatedList);
    
 }
    return(
        <div>
            <TodoList list={todoList} handleToggle={handleToggle}/>
            <TodoTnput handleAddTodo={handleAddTodo}/>
           
            
        </div>
    )
}