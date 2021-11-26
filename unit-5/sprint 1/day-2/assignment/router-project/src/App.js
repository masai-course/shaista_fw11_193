
import './App.css';
import { Navbar } from './components/Navbar';
import { Route , Switch} from "react-router-dom"
import { Women } from './components/Women';
import { Child } from './components/Child';
import { Men } from './components/Men';
import Banner from './components/Banner';
import { Footer } from './components/Footer';

import { Aboutus } from './components/footers/Aboutus';
import { Contactus } from './components/footers/Contactus';
import { Faq } from './components/footers/Faq';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
     <Switch>
     <Route exact path="/">
          <Banner/>

          </Route>
          <Route exact path="/women">
            <Women />

          </Route>
             <Route path="/Aboutus" exact>
         <Aboutus/>

       </Route>
       <Route  path="/Contactus" exact>
         <Contactus/>

       </Route>
       <Route path="/Faq" exact>
         <Faq/>

       </Route>
          <Route path="/men">
            <Men />
          </Route>
          <Route path="/child">
            <Child />
          </Route>

        </Switch>
         <Footer/>
    </div>
  );
}

export default App;
