import './App.css';
import {Data} from "./components/Data"
import { Switch,Route, } from 'react-router';

import { Signup } from './components/Signup';
import { Navbar } from './components/Navbar';
import { Loginn } from './components/Loginn';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
    {/* <Route exact path="/">
    <Home/>
    </Route> */}
    <Route path ="/signup">
     <Signup/>
   
    </Route>
    <Route  path="/data">
    <Data/>
    </Route>
     <Route  path="/login">
     <Loginn/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
