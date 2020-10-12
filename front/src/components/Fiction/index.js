import React, { useEffect, useRef } from 'react';

// Import de composants nécessaires au fonctionnement de l'interface
// de fiction
import Message from './Message';
import Choice from './Choice';

// Import des styles propres aux mobiles et aux desktops
import './style-mobile.scss';
import './style-desktop.scss';

// TODO : Réaliser un autoscroll à l'arrivée des messages.

const Fiction = ({ messages, choices, choicesDisplayed, submitChoice, isWriting, playerPicture }) => {
  console.log(messages);

  const maFutureDiv = useRef(null);
  useEffect(() => {
    const maDiv = maFutureDiv.current;

    maDiv.scrollTo({
      top: maDiv.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className="fiction">
      <div ref={maFutureDiv} className="fiction__messages">
        {
          messages.map((messageObject) => (
            <Message
              key={messageObject.id}
              author={messageObject.author}
              content={messageObject.content}
              picture={messageObject.author === 'Vous' ? playerPicture : messageObject.picture}
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
        {
          choices.map((choiceObject) => (
            <Choice
              key={choiceObject.id}
              targetPath={choiceObject.pathToCall}
              text={choiceObject.text}
              submitChoice={submitChoice}
              choiceContent={choiceObject.content}
            />
          ))
        }
      </div>
    </div>
  );
};


export default Fiction;
