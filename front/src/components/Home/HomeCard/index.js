import React from 'react';
import { Link } from 'react-router-dom';
import './style-desktop.scss';
import './style-mobile.scss';

const OwnedCard = ({ title, resume, image, isAvailable, isLogged }) => {
  const launchMessage = isLogged ? 'Lancer l\'aventure' : 'Connexion requise pour jouer';
  const launchIcon = isLogged ? 'caret-right' : 'times';
  const launchClass = isLogged ? 'logged' : 'notlogged';
  return (
    <div className="home-fiction__card" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="home-fiction__informations">
        <h4 className="home-fiction__title">{title}</h4>
        <div className="home-fiction__resume-container">
          {isAvailable && (
            <Link to="/fiction">
              <button type="button" className={`home-fiction__play-button home-fiction__play-button-${launchClass}`}>
                {launchMessage} <i className={`fas fa-${launchIcon} icon__button`} />
              </button>
            </Link>
          )}
          {!isAvailable && <button type="button" className="home-fiction__play-button unavailable">Indisponible...</button>}
          <p className="home-fiction__resume">{resume}</p>
        </div>
      </div>
    </div>
  );
};

export default OwnedCard;
