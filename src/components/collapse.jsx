
import arrow_white from '../assets/images/arrow_white.svg';
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import "../assets/styles/collapse.css";


function Collapse({ title, content }) {

  const [isOpen , setOpenClose] = useState(false);
  const dropdownContent = useRef(null);

  return (
    <div className="dropdown">
      <header className="dropdown_header" onClick={() => setOpenClose(!isOpen)} >
        <h2>
          {title}
        </h2>
        <img src={arrow_white} style={{ transform: isOpen && 'rotate(0deg)' }}></img>
      </header>
      <div ref={dropdownContent} className="dropdown_content" style={{maxHeight: isOpen? `${dropdownContent.current.scrollHeight}px` : `0px`}}>
        {typeof content === 'string' ? (
          <p>
            {content}
          </p>) : (<p>
            {content.map((string, index) =>
              <React.Fragment key={index}>
                {`${string}`}<br />
              </React.Fragment>
            )}
          </p>)}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

export default Collapse;