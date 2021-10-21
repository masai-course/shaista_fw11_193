
export const TodoList =({list})=>{
    return(
        <div>
        {
            list.map((e)=>(<p key ={e.id}>{e.title} - {(e.state)?"Done":"Not Done"} 
            <button
            onClick ={()=> {
                handleToggle(e.id);
            }}
            
            
            >
            change
            
            </button></p>
            ))}
        
        </div>
    )
}