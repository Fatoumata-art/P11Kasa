import "./../assets/styles/banner.css"
import photoBanner from '../assets/images/photoBanner.png'

function Banner() {
    const title = 'Chez vous, partout et ailleurs'
    return (
        <div className='banner'>
            <img src={photoBanner} alt='Chez vous, partout et ailleurs' />
            <h1 className='banner-title'>{title}</h1>
        </div>
    )
}

export default Banner