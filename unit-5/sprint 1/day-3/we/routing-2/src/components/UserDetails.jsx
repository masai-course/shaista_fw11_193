import { useContext, useEffect, useState } from "react"
import { useParams,Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/Authcontext";
export const UserDetail=()=>{
    const {token }= useContext(AuthContext)
   const {id} = useParams();
   console.log(id)
    const [user,setUser] = useState({});
    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then((x)=> x.json())
        .then((d)=>{
            setUser(d.data)
        })
    },[id])
 if(!token){
     return <Redirect to="/login"> </Redirect>
 }
return(
    <div>
    <div key={user.id}>
    <img src={user.avatar} alt="tes" />
  <h3>{user.first_name}</h3>
  <h3>{user.last_name} </h3>
  <p>{user.email} </p>
    
    </div>
  
    
    </div>
)
}