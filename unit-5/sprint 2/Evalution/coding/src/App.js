import './App.css';
import {Loginpage } from "./components/Loginpage"
import {Data} from "./components/Data"
import { Switch,Route, } from 'react-router';
import { Link } from 'react-router-dom';
import { Signup } from './components/Signup';
function App() {
  return (
    <div className="App">
    <Link to="/home">Home</Link>
    <Link to="/login">Signup</Link>
    <Link to ="/data"></Link>
    <Switch>
    {/* <Route exact path="/">
    <Home/>
    </Route> */}
    <Route path ="/signup">
    <Loginpage/>
    </Route>
    <Route  path="/data">
    <Data/>
    </Route>
     <Route  path="/login">
    <Signup/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
