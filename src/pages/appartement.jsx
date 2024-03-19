
import { useParams } from 'react-router-dom';
import Carrousel from '../components/carrousel' 
import DecriptionAppart from '../components/descriptionAppart';

function Appartement(id){
    id  = useParams().id;
    

  return (
      <section className='carrousel-section'>
          <Carrousel />
          <DecriptionAppart/>
      </section>
  );
}

export default Appartement