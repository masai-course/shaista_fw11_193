
import React from 'react';
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
//function LoginLayout() {

 
export function Signup({handleLogin}){
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
    let path = `/`; 
    history.push(path);
  }
    return(
        <div>
        <h1>Login with valid credentials</h1>
        <form onSubmit={handleSubmit}>
      
         Email:<input onChange ={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter your email address"/>
         <br/>
        Password:<input onChange ={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password"/>
        <br/>
       <button 
                onClick={routeChange}>
                 Login
                </button>
        </form>
        </div>
    )
}