import { Switch,Route, Link } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Login } from "./Pages/Login"
import { Dashboard } from "./Pages/Dashboard"
import "../App.css";
import { PrivateRoute } from "./PrivateRoute";
export const Routes=()=>{
    return(
        <>
        <div className="div">
           <Link to="/">Home</Link>
         <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        
        </div>
     
          
        <Switch>
        <Route path="/" exact>
        <Home/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
         <PrivateRoute path="/dashboard">
      <Dashboard/>
        </PrivateRoute>
       
        </Switch>
        </>
    )
}