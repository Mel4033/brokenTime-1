import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const Choice = ({ targetPath, text, choiceContent, shouldBeDisplayed, submitChoice }) => {
console.log(choiceContent);
  return (
    <div className="choice">
      <button
        type="button"
        className="choice__button"
        onClick={() => {
          submitChoice(targetPath, choiceContent);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Choice;
