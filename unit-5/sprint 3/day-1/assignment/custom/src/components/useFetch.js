import { useEffect, useState } from "react";
export function useFetch(url){
    const [loading,setLoad] = useState();
    const [ error,setErr] = useState();
    const [ data,setData] = useState();
    useEffect(()=>{
        setLoad(true);
        fetch(url)
        .then((x)=> x.json())
        .then((data)=>{
            setLoad(false)
            console.log(data);
            setData(data);
        })
        .catch(e=>{
            setLoad(false)
            setErr(e)
        })
    },[url]);
    return {
        loading,
        error,
        data
    }
}