import { Switch,Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Login } from "./Pages/Login"

export const Routes=()=>{
    return(
        <>
        <Switch>
        <Route path="/" exact>
        <Home/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        </Switch>
        </>
    )
}