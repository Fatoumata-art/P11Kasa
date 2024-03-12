import "./../assets/styles/banner.css"

function Banner({title, photoBanner}) {
   
    return (
        <section className='banner'>
            <img src={photoBanner} alt='Chez vous, partout et ailleurs' />
            <h1 className='banner-title'>{title}</h1>
        </section>
    )
}

export default Banner