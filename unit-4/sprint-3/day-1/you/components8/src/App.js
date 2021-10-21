
import {Joinus} from "./components/JoinUs"
import {Setting} from "./components/Settings"
import {Login} from "./components/Login"
import {Contactus} from "./components/Contact"
import {Search} from "./components/Seacrh"
import {Help} from "./components/Help"
import {Home} from "./components/Home"
import {Download} from "./components/Download"
import { Single } from "./components/Single"
import "./App.css"
function App() {

  return (
    <div className="flt">
    <div  >
    <Joinus/>
      <Setting/>
    </div>
    <div>
    <Login/>
      <Contactus/>
    </div>
    <div>
    <Search/>
      <Help/>
    </div>
    <div>
    <Home/>
      <Download/>
    </div>
      
      <Single className ="clr"  name={"Joinus"}/>
      <Single name={"Contact us"}/>
      <Single name={"Home"}/>
      <Single name={"Search"}/>
      <Single name={"Settings"}/>
      <Single name={"Help"}/>
      <Single name={"Download"}/>
      <Single name={"Login"}/>
      
      
    </div>
  );
}

export default App;
