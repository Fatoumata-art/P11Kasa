import data from '../data/data.json'
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/carousel' 
import  Collapse  from "../components/collapse";
import "../assets/styles/appartment.css";
import Ratings from '../components/rating';


function Appartement(){
    const {id}  = useParams();
    const apparts = data.filter((apartment) => apartment.id === id)

    if (!apparts.length)
        return <Navigate to="/notFound"/> 

    
    const appart = apparts[0];



    return (
        <main className='section-appartment'>
            <Carousel pictures={appart.pictures} />
            <section className="section-appart-right">
                    <div className="appart-desc-right">
                        <h1 className="appart-desc-title">{appart.title}</h1>
                        <p className="appart-desc-text">{appart.location}</p>    
                    </div>
                    <div className="section-appart-left">
                        <div className="appart-desc-left">
                            <div className="user-name">
                                <p>{appart.host.name}</p>
                            </div>
                            <img src={appart.host.picture} alt=""></img>
                        </div>
                       
                        {/* <Ratings rating={appart.note} /> */}
                    </div>
                </section>
                <div className='appart_collapse'>
                    <Collapse title="Description" content={appart.description} />
                    <Collapse title="Equippement" content={appart.equipments} />
                </div>
        </main>
        
)


}

export default Appartement