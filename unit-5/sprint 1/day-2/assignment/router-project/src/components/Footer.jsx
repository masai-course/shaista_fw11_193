import { Link } from "react-router-dom"
import "./footer.css"



const Footer = () => {
    return <div className="footer">
        <div>
            <h4>ABOUT</h4>
            <Link className="link"  to="/Aboutus"> About Us</Link> <br /><br />
            <Link className="link"  to="/contactus">Contact Us</Link>
            <p>Stories</p>
            <p>careers</p>
            <p>wholesale</p>
        </div>
        <div>
            <h4>HELP</h4>
            <p>Payments</p>
            <Link className="link" to="/FAQ">FAQ</Link>
            <p>Shipping</p>
            <p>cancellation</p>
        </div>
        <div>
            <h4>POLICY</h4>
            <p>Privacy</p>
            <p>Terms of use</p>
            <p>Return</p>
            <p>Security</p>
        </div>
        <div>
            <h4>SOCIAL</h4>
            <p><img className="img" src="https://www.macss.org/wp-content/uploads/2018/01/facebook-icon.jpg" alt="facebook" />FACEBOOK</p>
            <p><img className="img"  src="http://icons.iconarchive.com/icons/iynque/ios7-style/1024/Twitter-icon.png" alt="twitter" />TWITTER</p>
            <p><img className="img" src="https://clipartcraft.com/images/youtube-clipart-logo-square-1.png" alt="youtube" />YOUTUBE</p>

        </div>

    </div>
}

export {Footer}