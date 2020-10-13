import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style-desktop.scss';
import SingleMessage from './SingleMessage';

const NotFound = ({ allMessages, counter, launchNextMessage }) => {
  const maFutureDiv = useRef(null);
  useEffect(() => {
    const maDiv = maFutureDiv.current;

    maDiv.scrollTo({
      top: maDiv.scrollHeight,
      behavior: 'smooth',
    });
  }, [allMessages]);

  return (
    <div className="errorpage">
      <div className="errorpage__header">
        <h1 className="errorpage__title">404</h1>
        <h2 className="errorpage__subtitle">La page recherchée n'a pas été trouvée.</h2>
      </div>
      <div className="errorpage__livechat">
        <p ref={maFutureDiv} className="errorpage__text">
          {
            allMessages.map((messageObject) => (
              <SingleMessage
                message={messageObject.string}
                counter={counter}
                launchNextMessage={launchNextMessage}
              />
            ))
          }
        </p>
        <div className="livechat__choices">
          <Link to="/" className="livechat__choices--item"><input className="livechat__choice-button" type="button" value="[Revenir sur la page d'accueil]" /></Link>
          <div className="livechat__choices--item"><input onClick={() => { launchNextMessage() }} className="livechat__choice-button" type="button" value={`[Rester ici] x${counter}`} /></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
