import { useMemo, useState } from "react"

export const Fabinaci = ()=>{
    const[num,setNum] = useState(1);
     const fab = useMemo(()=> fabAlogo(num),[num]);

  const [,forceRender] = useState(0);
   const  handleChange =(e)=>{
         setNum(e.target.value);
     };
     return(
         <div>
         <h3>{fab} </h3>
          <input 
          type="text"
          value={num}
          placeholder="enter num"
          onChange={handleChange}
          />
         <button onClick={()=>{
       forceRender((p)=>p+1);
     }}
     >Force</button>
         
         </div>
        
     )
}
function fabAlogo(num){
    console.log("calcate fib ");
 retrun 
}