import data from '../data/data.json'
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/carousel' 
import  Collapse  from "../components/collapse";
import "../assets/styles/appartment.css";
import StartRate from '../components/rating';
import Tag from '../components/tag';


function Appartement(){
    const {id}  = useParams();
    const apparts = data.filter((apartment) => apartment.id === id);
    const appart = apparts[0];

    if (!apparts.length)
        return <Navigate to="/notFound"/> 
 
    return (
        <main className='section-appartment'>
            <Carousel pictures={appart.pictures} />
            <section className="section-appart-right">
                    <div className="appart-desc-right">
                        <h1 className="appart-desc-title">{appart.title}</h1>
                        <p className="appart-desc-text">{appart.location}</p>
                        <Tag tags={appart.tags}/>    
                    </div>
                    <div className="section-appart-left">
                        <div className="appart-desc-left">
                            <div className="user-name">
                                <p>{appart.host.name}</p>
                                <img src={appart.host.picture} alt=""></img>
                            </div>
                           
                        </div>
                       <StartRate rating={appart.rating}/>
                       
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