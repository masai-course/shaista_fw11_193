import { Link } from "react-router-dom"
import "./navbar.css"
import { Women } from "./Women";
export const Navbar = () => {
        return (
                <>
                        <div className="div">
                                <img src="https://previews.123rf.com/images/nengredeye/nengredeye1605/nengredeye160500014/57741610-colorful-flames-background-.jpg" alt="logo" />
                                <h4>MulTi</h4>
                                <div className="f">
                                        <div className="cat">

                                                Catgerios
                                                <div className="sub1">
                                                        <p>
                                                                <Link to="/women" style={{ textDecoration: "none", color: "white" }}> Women</Link>
                                                        </p>
                                                        <p>
                                                                <Link to="/men" style={{ textDecoration: "none", color: "white" }}>Men </Link>
                                                        </p><p>
                                                                <Link to="/child" style={{ textDecoration: "none", color: "white" }} > Child</Link>
                                                        </p>
                                                </div>
                                        </div>
                                        <div>
                                                Search
                                        </div>
                                        <div>
                                                About
                                        </div>
                                </div>
                        </div>
                </>
        );
}