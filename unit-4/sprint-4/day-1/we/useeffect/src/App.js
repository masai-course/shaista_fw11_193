import {useState,useEffect} from "react"
import './App.css';
import {Counter} from "./components/Counter"
function App() {
  const [data,setData]= useState([]);
  useEffect(() =>{
    fetch("http://localhost:3000/todos")
    .then((d) => d.json())
    .then((res) =>{
      console.log("REs",res);
      setData(res);
    },[]);
  })
  return (
    <div className="App">
    {
      data.map((e) =>(
        <div key={e.id}>{e.title}</div>
      ))
    }
    <Counter/>
    </div>
  );
}

export default App;
