import { useEffect, useState } from "react"
import {Link} from "react-router-dom";
//import { useParams } from "react-router-dom";
export const UsersList=()=>{
   // const {id} = useParams();
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://reqres.in/api/users")
        .then((x)=> x.json())
        .then((d)=>{
            setUsers(d.data)
        })
    },[])

return(
    <div>
    {
        users.map((e)=>(
            <p>
            <Link to={`/users/${e.id}`}> User: {e.first_name}</Link>
            </p>
        ))
    }
    
    </div>
 
)
}