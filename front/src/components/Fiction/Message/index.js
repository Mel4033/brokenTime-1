import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const fakeImg = 'https://cdn.discordapp.com/avatars/179551273840934912/c5dc29e716dc0e081e94e64329a5325c.png?size=1024';

const Message = () => (
  <div className="message">
    <div className="message__profile-picture">
      <img className="profile-picture" src={fakeImg} alt="profil" />
    </div>
    <div className="message__content protagonist">
      <div className="message__author protagonist">Meadow</div>
      <div className="message__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero magnam adipisci,
        quod repudiandae debitis eum nemo numquam optio autem ullam rem non voluptatibus
        excepturi, ducimus fugiat corporis quaerat vitae porro mollitia illo?
      </div>
    </div>
  </div>
);

export default Message;
