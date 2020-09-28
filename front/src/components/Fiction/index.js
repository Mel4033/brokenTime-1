import React from 'react';
import Message from './Message';
import Choice from './Choice';
import './style-mobile.scss';
import './style-desktop.scss';

const Fiction = () => (
  <div className="fiction">
    <div className="fiction__messages">
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
    <div className="fiction__choices">
      <Choice />
    </div>
  </div>
);

export default Fiction;
