
import './App.css';
import { Navbar } from './components/Navbar';
import { Route , Switch} from "react-router-dom"
import { Women } from './components/Women';
import { Child } from './components/Child';
import { Men } from './components/Men';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
     <Switch>
          <Route exact path="/women">
            <Women />
          </Route>
          <Route path="/men">
            <Men />
          </Route>
          <Route path="/child">
            <Child />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
