import { useMergeState } from "use-merge-state"
import {useState} from 'react';

const initState = {
    name:"",
    email:"",
    password:""
}
export const Form = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [temp,setTemp] = useState([]);
    const [data,setData] = useMergeState(initState,{merge: false})
    const handleSubmit = (e) => {
        e.preventDefault();
        setTemp({name,email,password})
        console.log(data)
        setData(temp,{
            merge: true
          })
    }
    return (<div>
        <form onSubmit={handleSubmit}>
            <label>Name :</label><input onChange={(e)=>setName(e.target.value)}type="text" placeholder="Enter the username"/>
            <label>Email:</label><input onChange={(e)=>setEmail(e.target.value)} type='email' placeholder="Enter the email"/>
            <label>Password</label><input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter the password"/>
            <br/>
            <button>submit</button>
        </form>
        <div>{data.name}</div>
        <div>{data.email}</div>
        <div>{data.password}</div>
    </div>)
}