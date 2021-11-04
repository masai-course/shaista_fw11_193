import axios from 'axios'
import './App.css';
import {useState} from 'react'

function Axios() {

    const [states,setstates] = useState([])
    



    

  const getData = () =>{
    axios.get('https://cdndemo-api.co-vin.in/api/v2/admin/location/states').then(
      (response)=>{
        console.log(response.data.states);
        setstates(response.data.states);
      }
    )
  }
  return (
    <div className="App">
      <div className="dataa">
    <button onClick = {getData}>Get States</button>
    </div>
   
  

    {
        states.map((e)=>{
            return <div key={e.state_id}>
              <div className="disp">
                <ul>
                <li>{e.state_name}</li>
                </ul>
                </div>
                </div>
        })
    }    
    
    </div>
  );
}

export default Axios;