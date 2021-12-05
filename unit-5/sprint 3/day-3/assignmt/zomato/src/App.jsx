import './App.css';
import {Meal} from "./components/Meals"
function App() {
  console.log(process.env)
  return (
    <div className="App">
      <h1>Welcome to the Zomato Meals Day Search Engine</h1>
      <Meal/>
    </div>
  );
}

export default App;
