import { useEffect } from "react";
import {useState} from "react"
import './App.css';
import {Restaturnt} from "./components/RestatruntDetails"
function App() { 
  const [data,setData]= useState([]);
  useEffect(() =>{
    fetch("http://localhost:3001/data")
    .then((d) => d.json())
    .then((res) =>{
      console.log("REs",res);
      setData(res);
    },[data]);
  })
  return (
    <>

      <Restaturnt/>
       <div className="dis">
        {data.map((data, key) => {
          return (
            <div className="div" key={key}>
                  <div>
                    <img src={data.img} alt="img" />
                  </div>
                  <div className="flo">
                    <p className="bg">  {data.rating}☆</p>
                    <p>{data.total_votes}-votes</p>
                    <p>{data.reviews}- reviews</p>
                  </div>
              <h3>{data.name}    </h3>
              <p>Cost for One - ₹{data.cost_for_one}</p>
              <p>{data.categories}</p>
              <p>Payment Method:{data.payment_method}</p>
            </div>
          );
        })}
      </div>
  
       </>
  )
}

export default App;
