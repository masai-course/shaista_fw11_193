import "./todo.css"
//import { useState } from "react";
export const TodoList =({title,id,Dec,handleToggle})=>{
   
    return(
        <div>
       <p className="div" style={{textDecoration:`${Dec}`}}>

            <input type="checkbox" className="done" 
             onClick ={()=> { handleToggle(id) } }
            />
            {title}
           </p>
            

          

        </div>
    )
}