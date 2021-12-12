import {useDispatch,useSelector} from "react-redux";
import {useState,useEffect} from "react";
import {addTodo,addTodoLoading,addTodoSucess,addTodoError,getTodoLoading,getTodoSuccess,getTodoError} from "../redux/action";
import axios from "axios";


export const Todo = () => {
    useEffect(() =>{
        getData();
    },[])
    const getData = async() => {
        dispatch(getTodoLoading())
        try{
            const {data} = await axios.get("http://localhost:3001/todos")
            dispatch(getTodoSuccess(data));
        }catch(e){
            dispatch(getTodoError(e))
        }   
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
    return loading?("loading ..."):<div >
        <input type="text" placeholder="Enter the task" onChange={e=>setText(e.target.value)}/>
        <button  onClick={async()=>{
            dispatch(addTodoLoading())
            const payload={
                status:false,
                title:text
            };

            try{
                const {data} = await axios.post("http://localhost:3002/todos", payload)
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
                <button  onClick={()=>handleToggle(e.id)}>
                    <div style={{display:"flex",flexDirection:"row"}}><span style={{paddingTop:"20px"}}>{e.name}</span><span>{e.status? "Done":'Not Done'}</span></div>
                </button>
            </div>)
        }
        <br/>
        <button  onClick={()=>setShowtask(!showtask)}>{showtask?"SHOW NOT COMPELETED TASKS":"SHOW ALL TASK"}</button>
    </div>
}