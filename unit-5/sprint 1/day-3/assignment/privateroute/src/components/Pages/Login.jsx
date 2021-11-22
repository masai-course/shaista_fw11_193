import { useContext } from "react"
import { Redirect } from "react-router-dom"
import { AuthContext } from "../contexts/Authcontext"

export const Login =()=>{
    const {token,handleChange}= useContext(AuthContext)
    if(token){
        return (
            <Redirect to="/users"></Redirect>
        )
    }
    return (
        <>
        <input type="text" placeholder="name" />
        <input type="password" className="pass" placeholder="password" />
        <button onClick={
            ()=>{
                handleChange("12333")
                
            }
        } >Submit</button>
       
        </>

    )
}