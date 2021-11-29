import "./log.css"
import React from 'react';
import { useHistory } from "react-router-dom"; 
export function Loginn({handleLogin}){
     const history = useHistory();

      const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }
    return(
        <div className="data">
        <h1>Login with required details</h1>
        <form >
         Email:<input  type="text" placeholder="Enter your email address"/>
         <br/>
        Password:<input type="password" placeholder="Enter your password"/>
        <br/>
       <button 
                onClick={routeChange}>
                 Login
                </button>
        </form>
        </div>
    )
}