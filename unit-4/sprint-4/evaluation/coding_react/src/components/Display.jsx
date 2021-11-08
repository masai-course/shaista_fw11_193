import { useEffect, useState } from "react";
import { item } from "./fetch";
export function Inventory(){
    const [data ,setData]= useState([]);
    const [text,setText]= useState([]);
    useEffect(()=>{
        getItem();
    },[])
    const getItem = async()=>{
        const {data} = await item.get("/",{
            params:{

            }
        })
        setData(data);
    }
    const handledAddTodo = async () =>{
        await item.post("/",{
            name:text,
        })
    }
    return(
        <>
        <div>
            <input type="text" placeholder="Add item" onChange={(e)=>{
                setText(e.target.value)
            }} />       
        <button onClick={handledAddTodo}>current list</button>
        <button>order list </button>
        </div>
        </>
    );

}