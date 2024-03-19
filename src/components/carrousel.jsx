import photo from '../assets/images/photo.jpg'

import "./../assets/styles/carrousel.css"

function Carrousel(){

    return (
        <div className='appart-container'>
        <img className="appart-img" src={photo} alt="" />
        </div>
    )
}

export default Carrousel