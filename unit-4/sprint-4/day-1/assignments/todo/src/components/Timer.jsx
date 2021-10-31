import React from "react";


const Timer= () => {
    const [time,setTime]= React.useState(0);
    const [isRunning,setIsRunning] = React.useState(false);
    const timeRef =React.useRef();

    React.useEffect(()=>{
        startTimer();

        return stopTimer;
    },[]);

    const startTimer=()=>{
        if(isRunning){
            return;
        }
        timeRef.current=setInterval(()=>{
            setTime((prev)=>prev+1);
        },1000);
        setIsRunning(true);
    }

    const stopTimer=()=>{
        clearInterval(timeRef.current);
        setIsRunning(false);
    }

    return(
        <div>
            <h1>TIMER</h1>
            <h3>{time}</h3>
            <button onClick={startTimer} >START</button>
            <button onClick={stopTimer} >PAUSE</button>
            <button onClick={()=>{setTime(0)}}>RESET</button>
        </div>
    )

}
export {Timer}