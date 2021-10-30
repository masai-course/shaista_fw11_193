import {ToDoInput} from "./ToDoInput";
import {ToDoList} from "./ToDoList";
import {useState} from 'react';
import {v4 as uuid } from 'uuid';

const liststyle = {
    width:"70%",
    border:"1px solid blue"
}
function ToDo(){
    const [data,setData] = useState([]);
    const [showtask,setShowtask] = useState(true);
    const handleAdd = (text)=>{
        const payload = {
            text,
            status:false,
            id:uuid(),
            clr:"white"
        }
        setData([...data, payload])
    }
    const handleRemove = id => {
      const updateTodo = data.filter(item => item.id !== id);
        setData(updateTodo);
    }

    const handleToggle = id => {
       
        const updatedList = data.map((todo) => {
            if (todo.id === id) {
               
                if (todo.clr === "white") {
                    todo.Dec = "Green"
                }
                else {
                    todo.Dec = ("white")

                }
            }
           return todo
        })
        setData(updatedList)
         const updateTodo = data.map(item => item.id === id?{...item,status:!item.status}:item);
        setData(updateTodo);
    }
    return (
        <div >
            <ToDoInput style={liststyle} onClick={handleAdd}/>
            {
                data.filter(item=>showtask?true:!item.status).map((item)=>(
                <ToDoList handleRemove = {handleRemove} handleToggle={handleToggle} key={item.id} {...item} />
                ))
            }
        <button onClick={()=>setShowtask(!showtask)}>{showtask?"SHOW NOT COMPELETED TASKS":"SHOW ALL TASK"}</button>
        </div>
    )
}

export {ToDo}