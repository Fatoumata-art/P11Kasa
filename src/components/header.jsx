
import "./../assets/styles/header.css"
import logo from '../assets/images/logo.png'
import { Outlet, Link, NavLink } from "react-router-dom";

function Header() {
    
    return (
      <>
        <header className="header">
            <div className="logo">
            <Link to="/"><img src={logo} alt="logo Kasa" /></Link>
            </div>
            <nav className="nav">
                <NavLink exact activeClassName='is-active' to="/">Home</NavLink >
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about">A propos</NavLink >
                <Outlet />       
            </nav>
        </header>
      </>
    )
  }
  
  export default Header
  