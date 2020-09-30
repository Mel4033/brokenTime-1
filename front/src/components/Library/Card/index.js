import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';

// Je vais ici créer et dynamiser mes cards, que je vais par la suite appeller dans ma library j'importe mon style scc desktop et 
// mobile, que j'ai aussi dans mon index de card
const Card = ({ title, resume, locked }) => {

  return (
    <div className="cardUnit">
      <h4 className="fictionTitle">Titre</h4>
      <p className={locked ? 'resume resume-unlocked' : 'resume resume-locked'}>
        {/* <button type="button" className="cardUnit-play">test</button> */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit reprehenderit exercitationem eum explicabo.</p>
    </div>
  );
};

export default Card;
