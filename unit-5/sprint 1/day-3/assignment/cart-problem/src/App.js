
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Route exact path="/HOME">
      <Home/>
      </Route >


      <Route exact path="/showCart/:id">
      <showCart/>
      </Route>
    </div>
  );
}

export default App;
