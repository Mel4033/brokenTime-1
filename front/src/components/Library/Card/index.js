import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';

// Je vais ici créer et dynamiser mes cards, que je vais par la suite appeller dans ma library j'importe mon style scss desktop et 
// mobile, que j'ai aussi dans mon index de card
const Card = ({ title, resume, locked, pictureCard }) => {

  return (
    <div className="cardUnit">
      <h4 className="fictionTitle">{title}</h4>  
      <img 
        src={pictureCard}
        alt="Représentation de la fiction" 
        className="pictureCard"
        />
      <p className={locked ? 'resume resume-unlocked' : 'resume resume-locked'}>
        {/* <button type="button" className="cardUnit-play">test</button> */}
        {resume}</p>
    </div>
  );
};

export default Card;
