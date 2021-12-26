import {useState} from "react";
export const Todo = () => {
    const [text,setText] = useState("");
    const [data,setData] = useState([]);
    const handleAdd = () => {
        setData([...data,{title:text,status:"false"}])
    }
    const handlecheckbox=(value) => {
        let elem = document.getElementById("textbox");
        let docelem = document.getElementById("text");
        elem.textContent = value.target.checked;
        value.target.checked?docelem.style.backgroundColor="green":docelem.style.backgroundColor="white";
    }
    return (<div>
        <h1>Welcome to the Todo Project</h1>
        <input className="inp" type="text" placeholder="Enter the Task Name" onChange={(e) => setText(e.target.value)}/>
        <button className="btn" onClick={handleAdd}>Add</button>
        {
            data.map((e,i)=>{
                return <div key={i} style={{display:"flex", flexDirection:"row",marginLeft:"350px"}}>
                    <div id="text">{e.title}</div>
                    <input type="checkbox" value={e.status} onClick={handlecheckbox}/>
                    <div id="textbox"></div>
                </div>
            })
        }
    </div>)
}