import {useEffect, useRef, useState} from "react"
function Timer() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
 useEffect(()=>{
  handleStart()
 },[])

 const handleStart =()=>{
    countRef.current =setInterval(()=>{
     setCount((p)=> p+1)
   },1000)
 }
  return (
    <div className="App">
     Timer:{count}
     <button 
     onClick ={()=>{
       handleStart();
     }}>Start</button>
     <button 
     onClick ={()=>{
       console.log("clear");
       clearInterval(countRef.current);
     }}
     >Pause</button>
     <button
     onClick ={()=>{
       setCount(0);
       clearInterval(countRef.current);
     }}
     >reset</button>
    </div>
  );
}

export default Timer;
