import React from 'react';

const Error = () => {
  const receivedError = 'Erreur : Vérifiez vos identifiants.';
  return (
    <div className="error">{receivedError}</div>
  );
};

export default Error;
