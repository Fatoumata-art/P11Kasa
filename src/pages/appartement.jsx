import data from '../data/data.json'
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/carousel' 
import "../assets/styles/descAppart.css";

function Appartement(){
    const {id}  = useParams();
    const appatId = data.filter((apartment) => apartment.id === id)
  // console.log("apptId = ", appatId)
  //condition
  if(!appatId.length){
      return <Navigate to="/notFound"/>
  }
 
    return (
       
        <section className='carrousel-section'>
           
                <Carousel image={appatId[0].pictures} />
           

          <section className="section-appart-right">
                <div className="appart-desc-right">
                    <h1 className="appart-desc-title">{appatId[0].title}</h1>
                    <p className="appart-desc-text">{appatId[0].location}</p>
                    
                </div>
                <div className="section-appart-left">
                    <div className="appart-desc-left">
                        <div className="user-name">
                            <p>{appatId[0].host.name}</p>
                        </div>
                        <img src={appatId[0].host.picture} alt=""></img>
                    </div>
                    <span>étoile</span>
                </div>
            </section>
      </section>
        
)


}

export default Appartement