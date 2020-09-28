import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

// Utilisation d'une image temporaire en guise de photo de profil.
const fakeImg = 'https://cdn.discordapp.com/avatars/179551273840934912/c5dc29e716dc0e081e94e64329a5325c.png?size=1024';

const Message = ({ author, content }) => {
  // Ternaire déterminant quelle classe doit être appliquée aux messages postés.
  const classToApply = author === 'Vous' ? 'player' : 'protagonist';
  return (
    <div className={`message ${classToApply}`}>
      <div className="message__profile-picture">
        <img className="profile-picture" src={fakeImg} alt="profil" />
      </div>
      <div className={`message__content ${classToApply}`}>
        <div className={`message__author ${classToApply}`}>{author}</div>
        <div className="message__text">{content}
        </div>
      </div>
    </div>
  );
};

export default Message;
