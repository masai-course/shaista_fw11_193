import {useState,useEffect} from 'react';
// import Axios from 'axios';
import {todo} from '../utils/request';

const styles = {
  width:"60%",
  height:"780px",
  border: "1px solid coral",
 
  margin:"auto",
  marginTop:"1%"
}

const textStyle = {
  fontSize:'30px',
 
  width:"80%",
  height:'50px',
  border: "1px solid black",
  margin:"20px 10%",
  justifyContent:"space-between",
}

const inputStyle = {
  width:"70%",
  height:"50px",
 
  fontSize:"30px",
  marginTop:"30px"
}

const bntStyle = {
  width:"100px",
  height:"50px",
  border:"none",
  marginLeft:"10px",
  paddingTop:"13px",
  paddingBottom:"11px",
  fontSize:"20px"
}
const prevbtnStyles = {
  width:"20%",
  height:"50px",
  fontSize:"30px",
  marginTop:"30px",
  
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
    const [page,setPage] = useState(1);
    const [showtask,setShowtask] = useState(true);
    const [loading,setLoading] = useState(true);
  useEffect(()=>{
    getTodo();
  },[page])
  const getTodo = async ()=>{
      const {data} = await todo.get("/",{
          params:{
              _page:page,
              _limit:5
          }
      })
      setData(data);
      setLoading(false);
  }
  const handledAddTodo = async ()=>{
        await todo.post("/",{
          name:text,
          status:false
      });
      getTodo();
  }
  const handleToggle = id => {
    const updateTodo = data.map(item => item.id === id?{...item,status:!item.status}:item);
    setData(updateTodo);
  } 
  return loading?<h1>Loading ...</h1>:(
    <div className="App" style = {styles}>
      <h1 style={headingStyle}>Use ToDo List to make your work or task more organized</h1>
      <input style={inputStyle} type="text" placeholder="Add Task to do list"onChange={(e)=>{setText(e.target.value)}}/>
      <button style={bntStyle} onClick={handledAddTodo}>Add Todo</button>
      {
        data.filter(item=>showtask?true:!item.status).map((item)=><>
        <button style={textStyle} onClick={()=>handleToggle(item.id)}>
          <div style={{marginRight:"20px"}}>{item.name}<span style={{paddingLeft:"330px",textAlign:"right",float:"right"}}>{item.status? "Done":'Not Done'}</span></div>
        </button>
        </>)
      }
      <button style={{width: '80%',margin:'auto',height:"50px",fontSize:"30px"}} onClick={()=>setShowtask(!showtask)}>{showtask?"SHOW NOT COMPELETED TASKS":"SHOW ALL TASK"}</button>
      <br/>
      <button style={prevbtnStyles} onClick={()=>{setPage(page-1)}}>Prev</button>
      <button style={prevbtnStyles} onClick={()=>{setPage(page+1)}}>Next</button>
    </div>
  );
}