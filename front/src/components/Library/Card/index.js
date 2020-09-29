import React from 'react';
import './style-desktop.scss';
import './style-desktop.scss';

const Card = ({title, resume, locked}) => {

  const classToApply = locked ? 'resume resume-locked' : 'unlocked';

  return (
    <div className="card">
      <div className="cardUnit">
        <h4 className="fictionTitle">{title}</h4>
        <p className={classToApply}>{resume}</p>
      </div>
    </div>
  );
}

export default Card;