import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

import classToApply, { imageToApply } from '../../../functions/messagesFunctions';

// Utilisation d'une image temporaire en guise de photo de profil.

const Message = ({ author, content, picture }) => (
  <div className={`message ${classToApply(author)}`}>
    <div className="message__profile-picture">
      <img className="profile-picture" src={picture} alt="profilepicture" />
    </div>
    <div className={`message__content ${classToApply(author)}`}>
      <div className={`message__author ${classToApply(author)}`}>{author}</div>
      <div className="message__text">{content}
      </div>
    </div>
  </div>
);

export default Message;
