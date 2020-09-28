import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const fakeImg = 'https://cdn.discordapp.com/avatars/179551273840934912/c5dc29e716dc0e081e94e64329a5325c.png?size=1024';

const Message = () => (
  <div className="message">
    <div className="message__profile-picture">
      <img className="profile-picture" src={fakeImg} alt="profil" />
    </div>
    <div className="message__content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero magnam adipisci, quod repudiandae debitis eum nemo numquam optio autem ullam rem non voluptatibus excepturi, ducimus fugiat corporis quaerat vitae porro mollitia illo? Pariatur nam officia consequatur provident! Tenetur magnam pariatur quos quo vel tempora ad qui veritatis accusamus reprehenderit suscipit est debitis ipsa rerum soluta maiores, eum vitae provident architecto voluptate, aliquid ratione! Nulla quisquam ipsum similique iusto cupiditate ea quis vero! Dolor sint esse odio accusamus similique repudiandae! Quasi asperiores impedit consequatur commodi architecto quod adipisci mollitia assumenda suscipit eum est itaque, sapiente odio sit, cum quaerat amet deleniti?
    </div>
  </div>
);

export default Message;
