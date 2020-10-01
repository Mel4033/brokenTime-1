import React from 'react';

const OwnedCard = ({title, resume, image}) => (
  <div className="fiction__card" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
    <div className="fiction__informations">
      <h4 className="fiction__title">{title}</h4>
      <p className="fiction__resume">{resume}</p>
    </div>
  </div>
);

export default OwnedCard;
