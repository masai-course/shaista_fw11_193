import {Link,Switch,Route} from 'react-router-dom';
import {Home} from "./Home";
import {Loginpage} from "./Loginpage";

export function Routes(){
    return (<div>
        <div >
         
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Loginpage />
            </Route>
        </Switch>
    </div>)
}