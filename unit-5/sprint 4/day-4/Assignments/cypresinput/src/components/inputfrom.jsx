
import {useState} from "react";
export const Inputform = () => {
    const [data,setData] = useState([]);
  const [text,setText] = useState("");
  const handleAdd = () =>{
    setData(text);
  }
  console.log(data);
    return (<div>
        <input className="inputtext" type="text" onChange={(e) => setText(e.target.value)}placeholder="Enter the name"/>
        <button onClick={handleAdd}>Add</button>
        <div>{data}</div>
    </div>)
}