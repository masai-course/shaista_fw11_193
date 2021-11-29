import {useDispatch,useSelector} from "react-redux";
import {useState,useEffect} from "react";
import {addTodoLoading,addTodoSucess,addTodoError,getTodoLoading,getTodoSuccess,getTodoError, getTodos} from "../redux/action";
import axios from "axios";

const styles = {
    width:"60%",
    height:"600px",
    border: "1px solid coral",
    backgroundColor:'skyblue',
    margin:"auto",
    marginTop:"10%"
  }

const textStyle = {
    fontSize:'30px',
    backgroundColor:'coral',
    width:"80%",
    height:'50px',
    border: "1px solid black",
    margin:"20px 10%",
    justifyContent:"space-between",
  }
  const inputStyle = {
    width:"70%",
    height:"50px",
    border:"none",
    fontSize:"30px",
    marginTop:"30px"
  }
  
  const btnStyle = {
    width:"100px",
    height:"50px",
    border:"none",
    marginLeft:"10px",
    paddingTop:"13px",
    paddingBottom:"11px",
    fontSize:"20px"
  }
export const Todo = () => {
    useEffect(() =>{
        getData();
    },[])
    const getData = async() => {
       dispatch(getTodos());
    }
    const dispatch=useDispatch();
    const {loading,error,data} = useSelector((store)=>store.todos)
    const [text,setText] = useState("");
    const [showtask,setShowtask] = useState(true);
    const handleChange = () =>{
        setText(text)
    }
    const handleToggle = id => {
        const updateTodo = data.map(item => item.id === id?{...item,status:!item.status}:item);
        dispatch(getTodoSuccess(updateTodo));
      } 
    return loading?("loading ..."):<div sytle={styles}>
        <input style={inputStyle} type="text" placeholder="Enter the task" onChange={e=>setText(e.target.value)}/>
        <button style={btnStyle} onClick={async()=>{
            dispatch(addTodoLoading())
            const payload={
                status:false,
                title:text
            };

            try{
                const {data} = await axios.post("http://localhost:3001/todos", payload)
                dispatch(addTodoSucess(data))

            }catch(e){
                dispatch(addTodoError(e));
            }
            //dispatch(addTodo(payload))
        }}>ADD</button>
        {
            data.filter(e=>showtask?true:!e.status).map(e=><div>
                {console.log(e.status)}
                <div>{e.title}</div>
                <button style={textStyle} onClick={()=>handleToggle(e.id)}>
                    <div style={{display:"flex",flexDirection:"row"}}><span style={{paddingTop:"20px"}}>{e.name}</span><span style={{paddingLeft:"330px",textAlign:"right",float:"right"}}>{e.status? "Done":'Not Done'}</span></div>
                </button>
            </div>)
        }
        <button style={{width: '80%',margin:'auto',height:"50px",fontSize:"30px",backgroundColor:"#00838F"}} onClick={()=>setShowtask(!showtask)}>{showtask?"SHOW NOT COMPELETED TASKS":"SHOW ALL TASK"}</button>
    </div>
}