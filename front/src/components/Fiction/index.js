import React from 'react';

// Import de composants nécessaires au fonctionnement de l'interface
// de fiction
import Message from './Message';
import Choice from './Choice';

// Import des styles propres aux mobiles et aux desktops
import './style-mobile.scss';
import './style-desktop.scss';

const Fiction = () => (
  <div className="fiction">
    <div className="fiction__messages">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
    <div className="fiction__choices">
      <Choice />
      <Choice />
    </div>
  </div>
);

export default Fiction;
