import {useState} from 'react';

function ToDoInput({onClick}){
    const [text,setText] = useState("");
    const handleChange = (e)=>{
        setText(e.target.value);
        
    }
    return (<div  >
        <h1>ToDo makes your tasks more organized</h1>
        <input type='text' value={text} onChange={handleChange} placeholder="Add Task to the ToDo List" />
        <button className="btn" onClick={()=>onClick(text)}>ADD TASK</button>
    </div>)
}
export {ToDoInput}