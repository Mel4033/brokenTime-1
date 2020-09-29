import React from 'react';

// Import de composants nécessaires au fonctionnement de l'interface
// de fiction
import Message from './Message';
import Choice from './Choice';

// Import des styles propres aux mobiles et aux desktops
import './style-mobile.scss';
import './style-desktop.scss';

const Fiction = ({ messages, choices, submitChoice }) => (
  <div className="fiction">
    <div className="fiction__messages">
      {
        messages.map((messageObject) => (
          <Message
            key={messageObject.id}
            author={messageObject.author}
            content={messageObject.content}
          />
        ))
      }
      <div className="fiction__loadingmessage">
        <div className="fiction__iswriting">
          Message entrant... |<span className="loadingstate">←</span>
        </div>
      </div>
    </div>
    <div className="fiction__choices">
      {
        choices.map((choiceObject) => (
          <Choice
            key={choiceObject.id}
            targetPath={choiceObject.pathToCall}
            content={choiceObject.content}
            submitChoice={submitChoice}
          />
        ))
      }
    </div>
  </div>
);

export default Fiction;
