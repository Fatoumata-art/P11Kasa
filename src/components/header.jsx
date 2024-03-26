
import "./../assets/styles/header.css"
import logo from '../assets/images/logo.png'
import { Outlet, Link } from "react-router-dom";

function Header() {
    
    return (
      <>
        <header className="header">
            <div className="logo">
            <Link to="/"><img src={logo} alt="logo Kasa" /></Link>
            </div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">A propos</Link>
                <Outlet />       
            </nav>
        </header>
      </>
    )
  }
  
  export default Header
  