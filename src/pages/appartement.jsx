import data from '../data/data.json'
import { useParams, Navigate } from 'react-router-dom';
//import Carousel from '../components/carousel' 
import  Collapse  from "../components/collapse";
import "../assets/styles/descAppart.css";
import AppartDetails from '../components/appartDetails';


function Appartement(){
    const {id}  = useParams();
    const appartId = data.filter((apartment) => apartment.id === id)
    const appartDetail = appartId[0];
  // console.log("apptId = ", appartId)
  //condition
  if(!appartId.length){
      return <Navigate to="/notFound"/>
  }
 
    return (
        <main className='carrousel-section'>
            {/* <Carousel image={appartDetail.pictures} title={appartDetail.title}/> */}
            <AppartDetails appartDetail={appartDetail}/>
                <div className='appart_collapse'>
                    <Collapse title="Description" content={appartDetail.description} />
                    <Collapse title="Equippement" content={appartDetail.equipments} />
                </div>
        </main>
        
)


}

export default Appartement