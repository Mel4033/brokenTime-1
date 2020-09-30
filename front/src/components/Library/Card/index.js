import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';

const Card = ({title, resume, locked}) => {

  return (
    
    <div className="cardUnit">
      <h4 className="fictionTitle">{title}</h4>
      <p className={locked ? 'resume resume-unlocked' : 'resume resume-locked'}>
    <button className="cardUnit-play">test</button>{resume}</p>
    </div>  

  );
};

export default Card;
