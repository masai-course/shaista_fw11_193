import {useState,useEffect} from 'react';
const styles = {
  
  border: "1px solid coral",
  
  

}

const textStyle = {
  fontSize:'30px',
  borderRadius:"5px",
  width:"40%",
  height:'50px',
  border: "1px solid black",
  margin:"20px 10%",
  justifyContent:"space-between",
  backgroundColor:"white"
}

const inputStyle = {
  width:"40%",
  height:"50px",
  
  fontSize:"30px",
  marginTop:"30px",
  borderRadius:"5px",
}

const bntStyle = {
  width:"109px",
  height:"50px",
 
  marginLeft:"10px",
  paddingTop:"13px",
  paddingBottom:"11px",
  fontSize:"20px",
   borderRadius:"5px",
}
const prevbtnStyles = {
  width:"8%",
  height:"35px",
  fontSize:"30px",
  marginTop:"30px",
 
   borderRadius:"5px",
}

const headingStyle={
  fontSize:"30px",
  fontweight:"bold",
  fontStyle:"italic",
  color:"#EC407A"
}
export function Todo(){
    const [data,setData] = useState([]);
    const [text,setText] = useState("");
    const [showtask,setShowtask] = useState(true);
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(true);
  useEffect(()=>{
    getTodo();
  },[page])

  const getTodo = ()=>{
    fetch(`http://localhost:3001/todo?_page=${page}&_limit=3`).then((d)=>d.json()).then(setData).then(()=>{setLoading(false)});
  }

  const handledAddTodo = ()=>{
    fetch("http://localhost:3001/todo",{
      method: "POST",
      body:JSON.stringify({
        name:text,
        status:false
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(getTodo)
  }
  const handleToggle = id => {
    const updateTodo = data.map(item => item.id === id?{...item,status:!item.status}:item);
    setData(updateTodo);
  } 
  return loading?<h1>Loading ...</h1>:(
    <div className="App" style = {styles}>
      <h1 style={headingStyle}> ToDo List to make your task more organized</h1>
      <input style={inputStyle} type="text" placeholder="Add Task to do list"onChange={(e)=>{setText(e.target.value)}}/>
      <button style={bntStyle} onClick={handledAddTodo}>Add Todo</button>
      {
        data.filter(item=>showtask?true:!item.status).map((item)=><>
        <button style={textStyle} onClick={()=>handleToggle(item.id)}>
          <div style={{marginRight:"20px"}}>{item.name}<span style={{paddingLeft:"330px",textAlign:"right",float:"right"}}>{item.status? "Done":'Not Done'}</span></div>
        </button>
        </>)
      }
      <br/>
      <button style={{width: '35%',margin:'auto',height:"50px",fontSize:"30px", borderRadius:"5px",}} onClick={()=>setShowtask(!showtask)}>{showtask?"SHOW NOT COMPELETED TASKS":"SHOW ALL TASK"}</button>
      <br/>
      <button style={prevbtnStyles} onClick={()=>{setPage(page-1)}}>Prev</button>
      <button style={prevbtnStyles} onClick={()=>{setPage(page+1)}}>Next</button>
    </div>
  );
}