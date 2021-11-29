import { Link } from "react-router-dom";
import "./navbar.css"
export const Navbar = ()=>{
    return(
        <div className="nav">
             <div className="ln1" >
    <Link to="/" className="ln2" style={{textDecoration:"none",color:"white",fontSize:"20px"}}>Home</Link>
    <Link to="/signup" className="ln2">Signup</Link>
    <Link to ="/login"></Link>
        
        </div>
    
        
        </div>
    )
}