import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import TodosDispatch from "./providers/todoProvider";
import TodosWrapper from "./wrappers/todos";
import todosReducer, { initialState } from "./reducers/todos";

import "antd/dist/antd.css";
import "./styles.css";

function App() {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  console.log(state);

  return (
    <div className="App">
      <h1>Todo App With UseReducer</h1>
      <TodosDispatch.Provider value={dispatch}>
        <TodosWrapper todos={state.todos} currentView={state.currentView} />
      </TodosDispatch.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
