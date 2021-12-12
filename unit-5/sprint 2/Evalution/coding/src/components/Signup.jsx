
import React from 'react';
import { useHistory } from "react-router-dom"; 
export function Signup({handleLogin}){
     const history = useHistory();

      const routeChange = () =>{ 
    let path = `/login`; 
    history.push(path);
  }
    return(
        <div className="data">
        <h1>Fill details to Signup</h1>
        <form >
         Name:<input type="text" placeholder="Enter your Name"/>
         <br/>
         Phone No.:<input type="number" placeholder="Enter your Number"/>
         <br/>
         Email:<input  type="text" placeholder="Enter your email address"/>
         <br/>
        Password:<input type="password" placeholder="Enter your password"/>
        <br/>
       <button 
                onClick={routeChange}>
                  Singup
                </button>
        </form>
        </div>
    )
}