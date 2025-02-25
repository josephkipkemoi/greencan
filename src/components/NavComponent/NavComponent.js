import { Link } from "react-router"
import "./NavComponent.css"
import MainLogo from "./green-can-main-logo.png"

function NavComponent() {
    return (
        <nav className="dt-navbar navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to="/">
                <div className="logo"><img src={MainLogo} alt="main-logo"/></div>
              </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/services">Services</Link>
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/blog">Blog</Link>
                    </li>   
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/about-us">About Us</Link>
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/contact-us">Contact</Link>
                    </li> 
                </ul>
            </div>         
        </nav>
    )
}

export default NavComponent