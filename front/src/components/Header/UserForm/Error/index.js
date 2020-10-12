import React from 'react';

const Error = ({ receivedError = 'Une erreur est survenue.' }) => (
  <div className="error">{receivedError}</div>
);

export default Error;
