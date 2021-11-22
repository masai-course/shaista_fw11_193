import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "./log.css"
export const Login=()=>{
    const {token,handleTokenChange} = useContext(AuthContext)
    return (
        <>
        <button className="btn" onClick={()=>{
                handleTokenChange("xyz")
            }
        }>Login</button>
        <button className="btn" 
        onClick={()=>{
                handleTokenChange("")
            }
        }>Logout</button>
        </>
    );

}