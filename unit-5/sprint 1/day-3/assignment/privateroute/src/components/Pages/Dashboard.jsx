import { Switch,Route } from "react-router-dom"
import { Link } from "react-router-dom"

export const Dashboard=()=>{
    return(
        <div>
       <h1>Welcome to Dashboard page</h1>
       <Link to="dashboard/settings">Settings</Link>
       <Switch>
         <Route exact path="dashboard/settings" >
        Settings Page
        </Route>
      
        </Switch>
        </div>
    )
}