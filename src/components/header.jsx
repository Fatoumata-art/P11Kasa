
import "./../assets/styles/header.css"
import logo from '../assets/images/logo.png'
function Header() {
    
  
    return (
      <>
        <header>
            <div className="logo">
                <img src={logo} alt="logo Kasa" />
            </div>
            <ul className="nav">
                <li>Accueil</li>
                <li>A propos</li>
            </ul>

        </header>
      </>
    )
  }
  
  export default Header
  