import React from 'react';
import { Link } from 'react-router-dom';
import './style-desktop.scss';
import './style-mobile.scss';

const OwnedCard = ({ title, resume, image, isAvailable }) => (
  <div className="home-fiction__card" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="home-fiction__informations">
      <h4 className="home-fiction__title">{title}</h4>
      <div className="home-fiction__resume-container">
        {isAvailable && <Link to="/fiction"><button type="button" className="home-fiction__play-button">Lancer l'aventure <i className="fas fa-caret-right icon__button" /></button></Link>}
        {!isAvailable && <Link to="/"><button type="button" className="home-fiction__play-button unavailable">Indisponible...</button></Link>}
        <p className="home-fiction__resume">{resume}</p>
      </div>
    </div>
  </div>
);

export default OwnedCard;
