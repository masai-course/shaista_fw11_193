import {useState} from "react";
function Counter({init}) {
  let [count,setCount]= useState(init);

  const handClick =(value)=>{
    setCount(value);
  }
  return (
    <div className="App">
     <h1> Count:{count}</h1>


     <button
      onClick={()=>{
        handClick(count+1);
      }}>Increment
     </button>




     <button
      onClick={()=>{
          handClick(count-1);
      }}>Decrement
     </button>

     
     <button
      onClick={()=>{
          handClick(count*2);
      }

      }>Double
     </button>
    </div>
  );
}

export { Counter};
