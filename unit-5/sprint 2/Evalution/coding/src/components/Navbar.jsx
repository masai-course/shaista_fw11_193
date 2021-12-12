import { Link } from "react-router-dom";
import "./navbar.css"
export const Navbar = ()=>{
    return(
        <div className="nav">
        <h2 className="lo">Book movies</h2>
             <div className="ln1" >
    <Link to="/" className="ln2" >Home</Link>
    <Link to="/signup" className="ln2">Signup</Link>
    <Link to ="/login"></Link>
        
        </div>
    
        
        </div>
    )
}