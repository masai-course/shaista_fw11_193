import { TodoTnput } from "./TodoInput";
import React, { useState } from "react";
import { TodoList } from "./TodoList";


export const Todos = () => {
    const [todoList, setTodoList] = useState([]);
     const [showAll,setShowAll]=useState(true);
    const handleAddTodo = (todo) => {
        setTodoList([...todoList, todo])
    }

    const handleToggle = (id) => {
        const updatedList = todoList.map((todo) => {
            if (todo.id === id) {
                todo.state = !todo.state
                if (todo.Dec === "none") {
                    todo.Dec = "line-through"
                }
                else {
                    todo.Dec = ("none")

                }
            }
            return todo;
        })

        setTodoList(updatedList);

    }
    return (

        <div >
            <TodoTnput  handleAddTodo={handleAddTodo}/>
            {
                
                todoList.filter((item)=>showAll?true:!item.status).map((item)=>(
                <TodoList  handleToggle={handleToggle} key={item.id} {...item} />
                ))
            }
        <button  onClick={()=> setShowAll(!showAll)}>{showAll?"SHOW NOT COMPELETED TASKS":"SHOW ALL TASK"}</button>
        </div>



//         <div>
//             <TodoTnput handleAddTodo={handleAddTodo} />

//             {
//             todoList.filter((item)=>(showAll ? true : !item.status ))
//             .map((item)=>(
//                      <TodoList 
//                      handleToggle={handleToggle}
//                      key={item.id} 
//                      {...item}/>
//             ))}
           

// <br/>
// <br/>
//             <button style={{width: '80%',margin:'auto'}} onClick={()=>setShowAll(!showAll)}>{showAll?"SHOW NOT COMPELETED TASKS":"SHOW ALL TASK"}</button>


//         </div>
    )
}