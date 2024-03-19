import "../assets/styles/descAppart.css";


function DecriptionAppart() {
    return (
            <section className="section-appart-right">
                <div className="appart-desc-right">
                    <h1 className="appart-desc-title">title</h1>
                    <p className="appart-desc-text">location</p>
                    <div className="tag-container">
                       <span className="tag">tags</span>
                    </div>
                </div>
                <div className="section-appart-left">
                    <div className="appart-desc-left">
                        <div className="user-name">
                            <p>prenom</p>
                            <p>nom</p>
                        </div>
                        <img src="" alt=""></img>
                    </div>
                    <span>étoile</span>
                </div>
            </section>
    );
}


export default DecriptionAppart;