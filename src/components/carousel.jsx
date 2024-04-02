import "./../assets/styles/carrousel.css"
//import arrowLeft from "./../assets/arrowLeft.svg"
//import arrowRight from "./../assets/arrowLeft.svg"
import React, { useState } from "react"

function Carousel(image, title){

    const [activeIndex, setActiveIndex ] = useState(0);

    // s'il n'y a qu'une seule photo, cacher les boutons fléchés
    const displayArrow = image.length > 1;

     // si l'index actuel est inférieur à la longueur, afficher l'image suivante.
    // Sinon, afficher la première image
    const next = () => {
        if (activeIndex < image.length - 1) {
            setActiveIndex((prevState) => prevState + 1);
        } else {
            setActiveIndex(0);
        }
    };

     // si l'index actuel est supérieur à 0, index actuel - 1
    // sinon afficher la dernière image
    const previous = () => {
        if (activeIndex > 0) {
            setActiveIndex((prevState) => prevState - 1);
        } else {
            setActiveIndex(image.length - 1);
        }
    };
  
    return (
        <div className='carousel'>
           <div className='carousel-item'>
            <img className="carousel-img" src={image[activeIndex]} alt={title} />
                
            </div>
        </div>
    )
}

export default Carousel