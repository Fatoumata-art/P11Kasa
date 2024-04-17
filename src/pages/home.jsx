import Banner from '../components/banner'
import photoBanner from '../assets/images/homeBanner.svg'
import Card from "../components/cards"

function Home(){
    // const title = 'Chez vous, partout et ailleurs'
    const title = "";
    return (
        <>
            <Banner photoBanner={photoBanner} title={title} />
            <section className='card-section'>
                <Card />
            </section>
        </>
    )     
}

export default Home