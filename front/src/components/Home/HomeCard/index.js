import React from 'react';
import './style.scss';

const OwnedCard = ({ title, resume, image }) => (
  <div className="home-fiction__card" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="home-fiction__informations">
      <h4 className="home-fiction__title">{title}</h4>
      <div className="home-fiction__resume-container">
        <p className="home-fiction__resume">{resume}</p>
      </div>
    </div>
  </div>
);

export default OwnedCard;
