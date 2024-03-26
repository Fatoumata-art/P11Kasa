import data from '../data/data.json'
import CarouselItem from './carouselItem'
import "./../assets/styles/carrousel.css"

function Carousel(){

    return (
        <div className='carousel'>
            {data.map((image) => {
                    return (
                       <CarouselItem image={image.pictures}/>
                    )
                })}
        
        </div>
    )
}

export default Carousel