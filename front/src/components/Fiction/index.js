import React, { useEffect } from 'react';

// Import de composants nécessaires au fonctionnement de l'interface
// de fiction
import Message from './Message';
import Choice from './Choice';

// Import des styles propres aux mobiles et aux desktops
import './style-mobile.scss';
import './style-desktop.scss';

// TODO : Réaliser un autoscroll à l'arrivée des messages.

const Fiction = ({ messages, choices, choicesDisplayed, submitChoice, isWriting }) => (
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

      {/* Affiche si un message est en cours de réception. */}
      {isWriting && (
        <div className="fiction__loadingmessage">
          <div className="fiction__iswriting">
            Message entrant... |<span className="loadingstate">←</span>
          </div>
        </div>
      )}

    </div>
    <div className="fiction__choices">
      {choicesDisplayed && choices.map((choiceObject) => (
        <Choice
          key={choiceObject.id}
          targetPath={choiceObject.pathToCall}
          text={choiceObject.text}
          submitChoice={submitChoice}
          choiceContent={choiceObject.content}
          shouldBeDisplayed={choicesDisplayed}
        />
      ))
      }
    </div>
  </div>
);

export default Fiction;
