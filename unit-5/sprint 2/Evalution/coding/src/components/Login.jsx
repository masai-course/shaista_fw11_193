import "./log.css"
import React from 'react';
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom"; 
export function Login({handleLogin}){
     const history = useHistory();
  const [email,setEmail] =useState("");
    const [password,setPassword] = useState("");
    const handleSubmit =(e)=>{
         e.preventDefault();
         let payload = {email,password}
         handleLogin(payload);
        <Redirect to="/"></Redirect>
    }
      const routeChange = () =>{ 
    let path = `login`; 
    history.push(path);
  }
    return(
        <div>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
         Name:<input onChange ={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter your Name"/>
         <br/>
         Phone No.:<input onChange ={(e)=>setEmail(e.target.value)} type="number" placeholder="Enter your Number"/>
         <br/>
         Email:<input onChange ={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter your email address"/>
         <br/>
        Password:<input onChange ={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password"/>
        <br/>
       <button 
                onClick={routeChange}>
                  Singup
                </button>
        </form>
        </div>
    )
}