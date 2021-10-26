import "./todo.css"
export const TodoList =({list,handleToggle})=>{
    return(
        <div>
        {
           // list.map((e)=>(<p key ={e.id} className="div" >{e.title} - {(e.state)?"Done":"Not Done"} 
            list.map((e)=>(<p key ={e.id} className="div" >{e.title} 
             
            <button className="done" 
            onClick ={()=> {
                handleToggle(e.id)
                
                }
            }
            style={{backgroundColor:`${e.color}`}}
            >
           
            
            </button></p>
            ))}
        
        </div>
    )
}