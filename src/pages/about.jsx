import Banner from '../components/banner'
import aboutBanner from '../assets/images/aboutBanner.png'
//import Collapse from '../components/collapse'

function About(){
    return (
        <>
         <Banner photoBanner={aboutBanner}/> 
         <h2>I'm about page</h2>
         {/* <Collapse /> */}
        </>
       
    )
}

export default About