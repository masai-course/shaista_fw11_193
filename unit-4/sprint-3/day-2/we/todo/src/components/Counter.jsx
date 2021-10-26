import {useState} from "react";
function Counter() {
  let [count,setCount]= useState(0);
  return (
    <div className="App">


     <h1> Count:{count}</h1>

     <button
      onClick={()=>{

        setCount(count++);
      }}>Add count
     </button>


     <button
      onClick={()=>{
        setCount(count-1);
      }}>Sub
     </button>


    </div>
  );
}

export { Counter};


