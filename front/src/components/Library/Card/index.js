import React from 'react';
import { Link } from 'react-router-dom';
import './style-desktop.scss';
import './style-mobile.scss';

// Je vais ici créer et dynamiser mes cards, que je vais par la suite appeller dans ma library
// j'importe mon style scss desktop et mobile, que j'ai aussi dans mon index de card
const Card = ({ id, title, resume, thumbnail }) => {
  const isAvailable = id === 1;

  return (
    <div className="cardUnit">
      <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="thumbnail">
        <h4 className="fictionTitle">{title}</h4>
        {isAvailable && (
          <Link to="/fiction/la-montre-du-temps">
            <p className="library-resume library-resume-unlocked">
              {resume}
            </p>
          </Link>
        )}
        {!isAvailable && (
          <p className="library-resume library-resume-locked">
            {resume}
          </p>
        )}

      </div>
    </div>
  );
};

export default Card;
