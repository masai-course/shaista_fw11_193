import './App.css';
import {Meal} from "./components/Meals"
function App() {
  console.log(process.env)
  return (
    <div className="App">
      <h1>Zomato Meals Day </h1>
      <Meal/>
    </div>
  );
}

export default App;
