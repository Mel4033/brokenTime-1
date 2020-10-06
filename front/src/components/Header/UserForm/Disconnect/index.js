import React from 'react';

const Disconnect = ({ disconnectUser }) => (
  <div className="disconnect__container">
    <button type="button" className="disconnect__button" onClick={() => { disconnectUser(); }}>Déconnexion</button>
  </div>
);

export default Disconnect;
