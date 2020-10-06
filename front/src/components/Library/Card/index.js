import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';

// Je vais ici créer et dynamiser mes cards, que je vais par la suite appeller dans ma library j'importe mon style scss desktop et 
// mobile, que j'ai aussi dans mon index de card
const Card = ({ title, resume, locked, thumbnail }) => {

  return (
    <div className="cardUnit">
      <div style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '198px'}}>
      <h4 className="fictionTitle">{title}</h4>  
        <p className={locked ? 'resume resume-unlocked' : 'resume resume-locked'}>
         {/* <button type="button" className="cardUnit-play">test</button> */}
          {resume}</p>
      </div>
    </div>
  );
};

export default Card;
