import React from 'react';

const Error = ({ receivedError = 'erreur à déterminer' }) => (
  <div className="error">{receivedError}</div>
);

export default Error;
