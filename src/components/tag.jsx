/* eslint-disable react/prop-types */
function Tag({tags}) {
    console.log(tags)

    return (
        <div className="tag-container">
            {
                tags.map((tag, index) => (
                <span className="tag" key={index}>{tag}</span>  
                ))
            }
        
        </div>
    )  

}

export default Tag