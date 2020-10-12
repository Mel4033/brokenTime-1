import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

import classToApply, { imageToApply } from '../../../functions/messagesFunctions';

// Utilisation d'une image temporaire en guise de photo de profil.
const fakeImg = 'https://media.discordapp.net/attachments/364094342953959424/765186494528094228/unknown.png';

const Message = ({ author, content }) => (
  <div className={`message ${classToApply(author)}`}>
    <div className="message__profile-picture">
      <img className="profile-picture" src={fakeImg} alt="profil" />
    </div>
    <div className={`message__content ${classToApply(author)}`}>
      <div className={`message__author ${classToApply(author)}`}>{author}</div>
      <div className="message__text">{content}
      </div>
    </div>
  </div>
);

export default Message;
