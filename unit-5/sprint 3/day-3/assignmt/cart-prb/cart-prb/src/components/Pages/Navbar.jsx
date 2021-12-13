import {Link} from "react-router-dom";
import "./pageStyle.css";
export const  Navbar = () =>{
    return <div id="NavbarLayout">
        <span>Navbar</span>
        <Link className="home" to="/">Home</Link>
        <Link className="cart" to="/cart">Cart</Link>
    </div>
}