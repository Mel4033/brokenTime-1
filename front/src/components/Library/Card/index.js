import React from 'react';
import { Link } from 'react-router-dom';
import './style-desktop.scss';
import './style-mobile.scss';

// Je vais ici créer et dynamiser mes cards, que je vais par la suite appeller dans ma library j'importe mon style scss desktop et 
// mobile, que j'ai aussi dans mon index de card

const Card = ({id, title, resume, thumbnail }) => {

 const isAvailable = id === 1;
 console.log(id);

  return (
    <div className="cardUnit">
      <div style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="thumbnail">
      <h4 className="fictionTitle">{title}</h4>
      {isAvailable && (
        <Link to="/fiction">
          <p className={`library-resume library-resume-unlocked`}>
          {resume}</p>
        </Link>
      )}
      {!isAvailable && (
        <p className={`library-resume library-resume-locked`}>
        {resume}</p>
      )}

      </div>
    </div>
  )
};

export default Card;