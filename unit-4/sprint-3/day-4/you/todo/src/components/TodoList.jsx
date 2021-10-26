import "./todo.css"
import { useState } from "react";
export const TodoList =({list,handleToggle})=>{
    const [showAll,setShowAll]=useState("true");
    return(
        <div>
        {
           // list.map((e)=>(<p key ={e.id} className="div" >{e.title} - {(e.state)?"Done":"Not Done"} 
            list.filter((e)=>(showAll?true:!e.status))
            .map((e)=>(<p key ={e.id} className="div" style={{textDecoration:`${e.Dec}`}}>
             
            <input type="checkbox" className="done" 
             onClick ={()=> {
                handleToggle(e.id)
                
                }
            }

            
            />
            {e.title}
           </p>
           
            ))}
         <button
            onClick={()=> setShowAll(!showAll)}
            
            
            
            >
            
            show un finied
            </button>
            <button
            onClick={()=> setShowAll(showAll)}
            
            
            
            >
            
            show All
            </button>
        </div>
    )
}