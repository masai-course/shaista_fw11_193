import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export const Third=()=>{
    const {state,handleChange} = useContext(AppContext)

    return <div>State is {state}
    <button onClick={()=>{
        handleChange("okay")
    }}>
    click to chnage
    </button>
    </div> ;
}