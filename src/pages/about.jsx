import Banner from '../components/banner'
import aboutBanner from '../assets/images/aboutBanner.svg'
import Collapse from '../components/collapse'
import AboutContent from '../data/AboutContent.json'

function About(){
    const title = "";
    return (
        <>
            <Banner photoBanner={aboutBanner} title={title}/> 
            <section className="about_section">
                {AboutContent.map((text) => 
                <Collapse title={Object.keys(text)[0]} content={Object.values(text)} key={Object.keys(text)[0]}/>)}
            </section>
        </>
       
    )
}

export default About