import {useState} from "react";
export const Todo = () => {
    const [text,setText] = useState("");
    const [data,setData] = useState([]);
    const handleAdd = () => {
        const temp = [...data,text]
        setData(temp)
    }
    data.className="todoitems"
    console.log(data);
    return (<div>
        <input className="todoinput" onChange={(e)=>{setText(e.target.value)}}placeholder="Enter the task name"/>
        <button className="todobtn" onClick={handleAdd}>Add</button>
        {
            data.map(e=><div>{e}</div>)
        }
    </div>)
}