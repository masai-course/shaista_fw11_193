import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import './App.css'

function Centers() {
    const [names,setnames] = useState()
    const [states,setstates] = useState([]);
    const changehandler = (e) =>{
        setnames(e.target.value)
        if(e.target.value===null)
        setstates(null);
      }
    const getDataof =  () =>{
        axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${names}&date=31-03-2021`).then(
          (response)=>{
            console.log(response.data.sessions);
            setstates(response.data.sessions);
          }
        )
      }
    return (
        <div>
            <div className="dataa">
    <input type="text" onChange={changehandler} placeholder="enter District Id"/>
    <button onClick={getDataof} >District</button>
    </div>
{
    states.map((data)=>{
        return <div className="disp">
            <p>{data.name} {data.state_name}</p>
        
        </div>
    })

}
</div>
    );
}

export default Centers;