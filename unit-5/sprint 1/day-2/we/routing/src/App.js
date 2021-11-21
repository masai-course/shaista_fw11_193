import './App.css';
import { Route,Switch} from "react-router-dom"
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { UsersList } from './components/UserList';
import {UserDetail} from './components/UserDetails'
function App() {
  return (
    <div className="App">

    <Navbar></Navbar>
    <Switch>
      <Route path="/" exact>
     <Home></Home>
      </Route>
 
      <Route path="/about" >
        <About></About>
    
      
      </Route>
      <Route path="/users" exact>
      <UsersList ></UsersList>
      </Route>
      <Route path="/users/:id" exact>
      <UserDetail ></UserDetail>
      </Route>
      <Route>
      404 not found
      </Route>
      </Switch>
    </div>
  );
}

export default App;
