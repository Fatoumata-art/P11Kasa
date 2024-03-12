import Banner from '../components/banner'
import aboutBanner from '../assets/images/aboutBanner.png'
import Collapse from '../components/collapse'
import AboutContent from '../data/AboutContent.json'

function About(){
    return (
        <>
            <Banner photoBanner={aboutBanner}/> 
            <section className="about_section">
                {AboutContent.map((text) => 
                <Collapse title={Object.keys(text)[0]} content={Object.values(text)} key={Object.keys(text)[0]}/>)}
            </section>
        </>
       
    )
}

export default About