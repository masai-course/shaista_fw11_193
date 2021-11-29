import { useState } from "react";
import { Redirect } from "react-router";

export function Login({handleLogin}){
    const [email,setEmail] =useState("");
    const [password,setPassword] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        let payload = {email,password}
        handleLogin(payload);
        <Redirect to="/"></Redirect>
    }
    return(
        <div>
        <h1>Login with valid credentials</h1>
        <form onSubmit={handleSubmit}>
         Email:<input onChange ={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter your email address"/>
         <br/>
        Password:<input onChange ={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password"/>
        <br/>
        <input type="submit" value="Submit" 
        />
        </form>
        </div>
    )
}