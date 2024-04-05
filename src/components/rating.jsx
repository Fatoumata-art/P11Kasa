import  './../assets/styles/rating.css';
import  StarIcon  from './../assets/star.svg';


 function Ratings({rating}) {
  
  // transformer le rating en nombre parce que c'est un string dans le fichier JSON
  const numberOfStars = parseInt(rating);
  console.log(numberOfStars)
  const maxRating = 5;
 
  // définir le nombre d'étoiles grises en extrayant le rating de maxRating
  const numberOfEmptyStar = maxRating - numberOfStars;

  const starIcons = [];

  // générer des nombres d'étoiles remplies et les stocker dans un array
  for (let i = 0; i < numberOfStars; i++) {
    starIcons.push(<StarIcon key={i} className="stars" />);
  }

  const emptyStarIcons = [];
 
  // générer des nombres d'étoiles vides et les stocker dans un array
  for (let i = 0; i < numberOfEmptyStar; i++) {
    emptyStarIcons.push(<StarIcon key={i} className="empty-stars" />);
  }

  return (
    <div className="starWrap">
      
      {starIcons}
      {emptyStarIcons}
    </div>
  );}

  export default Ratings;