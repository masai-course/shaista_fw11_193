import React, { useEffect, useState } from 'react';

export default function Timer() {
    const [timer,setTimer] = useState(0);
    var i=0;
    const Timer=()=>{
       if(i<10){
            setTimer(timer+1);
            i++;
       }else{
           setTimer(0);
           i=0;
       }     
    }
    
    //useEffect(()=>{
        setInterval(Timer,3000)
  //  })
  return <div>

        <h1>Timer:{timer}</h1>
  
     </div>;
}
