import './App.css';
import {Loginpage } from "./components/Loginpage"
import {Data} from "./components/Data"
import { Switch,Route, } from 'react-router';
import { Link } from 'react-router-dom';
import { Home } from './components/Home';
function App() {
  return (
    <div className="App">
    <Link to="/home">Home</Link>
    <Link to="/login">Login</Link>
    <Link to ="/data"></Link>
    <Switch>
    {/* <Route exact path="/">
    <Home/>
    </Route> */}
    <Route path ="/login">
    <Loginpage/>
    </Route>
    <Route  path="/data">
    <Data/>
    </Route>
     <Route  path="/home">
    <Home/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
