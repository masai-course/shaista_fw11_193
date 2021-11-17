import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import './App.css';
import { Navbar } from './components/Navbar';


function App() {
   const {token,handleTokenChange} = useContext(AuthContext)
   if(!token){
     return(
       <div className="App">
         <Navbar></Navbar>
       <p>click login to login </p>
       
       </div>
     )
   }
   else{
  return (
    <div className="App">
      
    <Navbar></Navbar>
    <p>Your logged in successfully click logout to logout</p>
    </div>
  );
}
}

export default App;
