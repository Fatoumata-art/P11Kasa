import "./../assets/styles/carrousel.css"
import arrowLeft from "./../assets/arrowLeft.svg"
import arrowRight from "./../assets/arrowRight.svg"
import React, { useState } from "react"
//import CarouselItem from "./carouselItem";

function Carousel({pictures}){
  
     const [imageIndex, setImageIndex ] = useState(0);

    // s'il n'y a qu'une seule photo, cacher les boutons fléchés
    //const displayArrow = pictures.length > 1;

     // si l'index actuel est inférieur à la longueur, afficher l'image suivante.
    // Sinon, afficher la première image
    const nextImage = () => {
        if (imageIndex < pictures.length - 1) {
            setImageIndex(imageIndex + 1);
        } else {
            setImageIndex(0);
        }
    };

     // si l'index actuel est supérieur à 0, index actuel - 1
    // sinon afficher la dernière image
    const previousImage = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        } else {
            setImageIndex(pictures.length - 1);
        }
    };

    if(pictures.length == 0){

    }
    return (
        <div className='carousel'>
             <img src={arrowLeft} className={pictures.length == 1 ? "arrow left img-hidden" : "arrow left"} alt='Image précédente' onClick={previousImage}></img>
                  
           { 
            pictures.map((url, index) => (
                <div className='carousel-item'>
                    <img  src={url} alt="" className={imageIndex === index ? "carousel-img" : "carousel-img img-hidden"} />
                </div>
                    
            ))
           }
            <img src={arrowRight} className={pictures.length == 1 ? "arrow right img-hidden" : "arrow right"} alt='Image suivante' onClick={nextImage}></img>
            <span className="numeros">{`${imageIndex + 1}/${pictures.length}`}</span>
        </div>
    )
}

export default Carousel