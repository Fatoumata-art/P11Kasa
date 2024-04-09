import  Star  from "./../assets/star.svg";
import  ColoredStar  from "./../assets/coloredStar.svg"
import PropTypes from 'prop-types';


 function StartRate({rating}) {
  
  const starsRange = [1, 2, 3, 4, 5];
  return (
      <div className="rating">
          {starsRange.map((rangeElem) => rating >= rangeElem ? <img key={rangeElem.toString()} src={ColoredStar}></img> : <img key={rangeElem.toString()} src={Star }></img>)}
      </div>
      );
}

StartRate.propTypes = {
  rating: PropTypes.string.isRequired,
};

  export default StartRate;