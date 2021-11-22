
import { useContext } from 'react';
import './App.css';
import { First } from './components/First';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const {token,handleTokenChange}= useContext(AuthContext)

  if(!token){
    return(
      <>
      <div className="App">
      <h4>login please</h4>
      <input type="text"/>
      <input type="password"/>
      <button onClick={()=>{
        handleTokenChange("hshhh")
      }}>
      submit
      
      </button>
      </div>
      </>
    )
  }
  return (
    <div className="App">
    
    <First></First>
    </div>
  );
}

export default App;
