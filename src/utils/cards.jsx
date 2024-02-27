function Card(){

    const Data_Url = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json';

        // fetch(Data_Url)
        // .then(reponse => reponse.json())
        // .then(data => this.setSate({ items: data }));
        // console.log(reponse);
        // const {items} = this.state
    return (
      //  {items.map(item => (
            <div className="card">
            <img src="" alt="" />
            <div className="card-text">
                <h2>title</h2>
                <p>texte</p>
            </div>
       </div>
       // ))}
          
    )
}

export default Card