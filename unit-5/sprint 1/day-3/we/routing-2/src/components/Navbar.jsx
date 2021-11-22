import { Link } from "react-router-dom"
import "./navbar.css";
export const Navbar=()=>{
    return(
        <>
        <div>
            <div className="div">
    <Link to="/">  Home   </Link>
    <Link to="/about">  About   </Link>
    <Link to="/users">  Users</Link>
     <Link to="/login">  Login</Link>

    </div>
        
        </div>
        </>

    )
}