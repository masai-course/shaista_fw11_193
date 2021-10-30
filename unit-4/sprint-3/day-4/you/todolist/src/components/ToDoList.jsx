
import "./todo.css"
function ToDoList({text,status,id,clr,handleToggle,handleRemove}){
    return (
        <div className="div" style={{backgroundColor:`${clr}`}}>
            <h2 >{text}</h2>
            <button onClick ={()=>
             handleRemove(id)
             }>DELETE</button>
            <button onClick={()=>handleToggle(id)}>{status? 'COMPELETED':'NOT COMPLETED'}
           
            </button>
        </div>
    );
}

export {ToDoList}
