import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const Choice = ({ targetPath, content, shouldBeDisplayed }) => (
  <div className="choice">
    <button
      type="button"
      className="choice__button"
      onClick={() => {
        console.log(`Je veux accéder au chemin N°${targetPath}`);
      }}
    >
      {content}
    </button>
  </div>
);

export default Choice;
