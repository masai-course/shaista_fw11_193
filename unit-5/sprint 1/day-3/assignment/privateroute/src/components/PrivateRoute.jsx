import { useContext } from "react"
import { Redirect, Route } from "react-router"
import { AuthContext } from "../context/Authcontext"

export const PrivateRoute=({children})=>{
    const {token} = useContext(AuthContext)
    if(!token){
        return (
            <Redirect to="/login"></Redirect>
        )
    }
    return (

    <Route path="/dashboard">{children}</Route>
    )
}