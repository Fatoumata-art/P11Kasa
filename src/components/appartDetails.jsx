//import Ratings from "./rating";

function AppartDetails(appartDetail){
    <section className="section-appart-right">
    <div className="appart-desc-right">
        <h1 className="appart-desc-title">{appartDetail.title}</h1>
        <p className="appart-desc-text">{appartDetail.location}</p>    
    </div>
    <div className="section-appart-left">
        <div className="appart-desc-left">
            <div className="user-name">
                <p>{appartDetail.host.name}</p>
            </div>
            <img src={appartDetail.host.picture} alt=""></img>
        </div>
       
        {/* <Ratings rating={appartDetail.rating} /> */}
    </div>
</section>
}

export default AppartDetails;