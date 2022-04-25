import "./navbar.scss"
import logo from "../img/logo.png"

export default function Navbar() {
    return (
        <div className="navbar" id="navbar">
            <div className="wrapper">
                <div className="logo">
                    <img src={logo} width="40px" height="40px" />
                </div>
                <div className="nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a>Perspectives</a>
                    <a>Contact</a>
                </div>
            </div>
        </div>
    )
}
