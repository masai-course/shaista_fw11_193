import './App.css';
import {Counter} from './components/Counter';
import {Todo} from './components/Todo';
function App() {
  return (
    <div className="App">
      Hello World
      <Counter/>
      <hr/>
      <Todo/>
    </div>
  );
}

export default App;
