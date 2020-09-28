import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const Choice = ({content, shouldBeDisplayed}) => (
  <div className="choice">
    <button type="button" className="choice__button">
      {content}
    </button>
  </div>
);

export default Choice;
