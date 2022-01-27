import { useEffect, useState } from "react";

const Todo=()=>{
    const [text,setText]= useState("");
    const [todos,setTodos]= useState([]);
    const [count,setCounter] = useState(0);
    

    const HandleSubmit=()=>{
        setTodos([...todos,text])
        setText("")
    }
    const HandleChange=(e)=>{
        setText(e.target.value)
    }
    const Add=()=>{
        setCounter(count+1);
    }
    const HandleDelet=(e)=>{
        console.log(e);
    //   const tod=  todos.filter((item)=>(item!==e))
    //     setTodos([...tod])
    }
    useEffect(()=>{

    })
    return(
        <>
        
       Todo: <input type="text" value={text} placeholder="Enter Todos" onChange={HandleChange}/>
       <br></br>
     
       <button onClick={HandleSubmit}>Submit</button>
        {todos.map((e)=>(
            <div>
          <div>{e}</div>
          <button onClick={HandleDelet(e.id)}>Delete</button>
          </div>
        ))
      }
      <div>{count}</div><button onClick={Add}>ADD 1</button>
        </>
    )
}
export  {Todo} ;
// import { useState } from "react"
// //import "./style.css"
// function Todo()
// {
//     const [text,setText]=useState("");
//     const [todos,setTodos]=useState([]);
//     const handelChange = (e) =>{
//         setText(e.target.value);
//     }

//     const handleTodo= () =>{
//         setTodos([...todos, text]);
//         setText("");
//     }
//     return (
//         <div className="maindiv">
//             <input value={text} type="text" onChange={handelChange} placeholder="Enter Task"/>
//             <button onClick={handleTodo}>Add Task</button>
//             {
//                 todos.map((e) =>(
//                     <div className="showTask">{e}</div>
//                 ))
//             }
//         </div>
//     )
// }
// export {Todo}