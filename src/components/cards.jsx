import data from '../data/data.json'
import {Link} from 'react-router-dom';
import "../assets/styles/card.css"

function Card(){ 
    return (
        data.map(appart => {
            return (
                  <Link to={`/appartement/${appart.id}`}>
                    <article className="card">
                        <img className="card-img" src={appart.cover} alt="" /> 
                        <h2  className="card-text">{appart.title}</h2>
                    </article>
                </Link>
            )
        })  
    )
}

export default Card