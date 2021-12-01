//import { useEffect, useReducer, useState } from "react"
import './App.css';
import { useFetch } from "./utils/useFetch";

// const reducer = (state,{type,payload}) =>{
//   switch(type){
//     case "In_cut":
//     return{
//       ...state,
//       count: state.count + payload,
//     };
//     default :
//     return{
//       ...state,
//     }
//   }
// }

function App() {
 // const [ state,dispatch] = useReducer(reducer,{count:0})
  const {data,error,loading} = useFetch("https://reqres.in/api/users");
 console.log(data)
  //return(
  //   <div className="App">
  //     <h3>Count:{state.count}</h3>
  //     <button 
  //     onClick ={()=>{
  //       dispatch({type: "In_cut", payload:1})
  //     }}>Add 1</button>
  //   </div>
  // )
  // const toRender = useDelay(2)
  // if (!toRender) {
  //   return (
  //     <img src="https://i.stack.imgur.com/ATB3o.gif" alt="dd" />
  //   )
  // }

  
  return loading ? (
    "Loading..."
  ): error ? (
    "Error.."
  ) :(
    <div className="App">
     Hello World {data?.data[0].first_name}
    </div>
  );
}

export default App;
