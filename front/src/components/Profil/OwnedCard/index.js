import React from 'react';
import { Link } from 'react-router-dom';
import './style-desktop.scss';
import './style-mobile.scss';

const OwnedCard = ({ id, title, resume, image }) => {
  const isAvailable = id === 1;
  const launchMessage = 'Lancer l\'aventure';
  return (
    <div className="profile-fiction__card" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="profile-fiction__informations">
        <h4 className="profile-fiction__title">{title}</h4>
        <div className="profile-fiction__resume--container">
          <p className="profile-fiction__resume">{resume}</p>
          {isAvailable && (
            <Link to="/fiction/la-montre-du-temps">
              <button type="button" className="profile-fiction__play-button profile-fiction__play-button-logged">
                {launchMessage} <i className="fas fa-caret-right icon__button" />
              </button>
            </Link>
          )}
          {!isAvailable && <button type="button" className="profile-fiction__play-button unavailable">Indisponible...</button>}
        </div>
      </div>
    </div>
  );
};

export default OwnedCard;
