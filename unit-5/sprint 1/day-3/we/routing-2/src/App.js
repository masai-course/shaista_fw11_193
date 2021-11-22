import './App.css';
import { Route,Switch} from "react-router-dom"
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { UsersList } from './components/UserList';
import {UserDetail} from './components/UserDetails'
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
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
      <PrivateRoute path="/users/:id" exact>
      <UserDetail ></UserDetail>
      </PrivateRoute>
      <Route path="/login" exact>
      <Login/>
      </Route>
      <Route>
      404 not found
      </Route>
      </Switch>
    </div>
  );
}

export default App;
