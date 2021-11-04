
import { useState } from "react";
import { fetchUsers } from "./fetchUsers";
import "./github.css"
const Github =() =>{
    const [query, setQuery] = useState(" ");
    const [isLoding, setIsLoading]= useState(false);
    const [isError, setIsError]= useState(false);
    const [users, setUsers]= useState([]);
    const handleSearch = () =>{
        setIsLoading(true);
        setIsError(false);
        fetchUsers(query)
        .then((res)=>{
            setUsers(res.data.items);
        })
        .catch((err)=>{
            setIsError(true);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    };
    return (
        <>
            <h1>
            Search for GitHub Users
            </h1>
            <div>
            <input value ={query} onChange ={(e)=> setQuery(e.target.value)} placeholder="search"
            />
            <button
            disabled={isLoding}
            onClick ={handleSearch}
            >
            {isLoding ?"loading":"SEARCH"}
            </button>
            </div>
            {isError ? "please fill in text ":null}
            <div>
             {console.log(users)}
            {users?.map((item)=>(
             
                <div className="div" key={item.id}>
                <img src={item.avatar_url} alt="avtar"/>
               <p> User Id: {item.login}</p>
             
             <p>Click below for account details</p>
                <a href={item.html_url}> GitHub Account </a>
                </div>
            ))}
            </div>
        </>
    )
 }
 export {Github};