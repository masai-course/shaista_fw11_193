// import { useContext } from 'react';
// import { AuthContext } from './contexts/AuthContext';
import './App.css';
import {Theme} from "./components/Theme"
//import { Navbar } from './components/Navbar';


function App() {
  //  const {token,handleTokenChange} = useContext(AuthContext)
  //  if(!token){
  //    return(
  //      <div className="App">
  //        <Navbar></Navbar>
  //      <p>click login to login </p>
       
  //      </div>
  //    )
  //  }
  //  else{
  return (
    <div className="App">
      
   {/* <Navbar></Navbar> */}
   <Theme></Theme>
    </div>
  );
}
//}

export default App;
