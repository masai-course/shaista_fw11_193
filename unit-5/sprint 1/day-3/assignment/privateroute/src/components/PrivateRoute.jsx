import { useContext } from "react"
import { Redirect, Route } from "react-router"
import { AuthContext } from "../contexts/Authcontext"

export const PrivateRoute=({children})=>{
    const {token} = useContext(AuthContext)
    if(!token){
        return (
            <Redirect to="/login"></Redirect>
        )
    }
    return (

    <Route path="/users/:id">{children}</Route>
    )
}