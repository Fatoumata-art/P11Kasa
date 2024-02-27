
import "./../assets/styles/footer.css"
import logoFooter from '../assets/images/logoFooter.png'

function Footer() {
    
  
    return (
      <>
        <footer>
            <div className="logoFooter">
                <img src={logoFooter} alt="kasa" />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
      </>
    )
  }
  
  export default Footer
  