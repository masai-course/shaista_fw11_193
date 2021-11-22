import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {Route} from 'react-router-dom'
import ProductPer from './ProductPer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/products">
        <Products/>
      </Route>


      <Route exact path="/products/:id">
        <ProductPer/>
      </Route>
      
    </div>
  );
}

export default App;