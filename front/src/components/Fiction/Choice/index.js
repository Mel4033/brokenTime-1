import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const Choice = ({ targetPath, text, choiceContent, shouldBeDisplayed, submitChoice }) => {
const classToApply = shouldBeDisplayed ? 'choice' : 'choice__hidden';

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
