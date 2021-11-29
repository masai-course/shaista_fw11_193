import './App.css';
import {Loginpage } from "./components/Loginpage"
import {Data} from "./components/Data"
import { Switch,Route, } from 'react-router';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to ="/data"></Link>
    <Switch>
    {/* <Route exact path="/">
    <Home/>
    </Route> */}
    <Route path ="/login">
    <Loginpage/>
    </Route>
    <Route exact path="/data">
    <Data/>
    </Route>
    
    </Switch>
    </div>
  );
}

export default App;
