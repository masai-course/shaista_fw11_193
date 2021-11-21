import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
export const UserDetail=()=>{
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