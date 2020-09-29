import React from 'react';

const Menu = ({isLoginOpened}) => (
  <div className="menu">
    <div className="menu__burger">
      <button type="button" className="burger__button">
        <icon className="burger__icon fas fa-bars fa-2x" />
      </button>
    </div>
    <div className="menu__desktop">
      <div className="menu__links">
        <a className="link active" href="#" alt="none">Accueil</a>
        <a className="link" href="#" alt="none">Bibliothèque</a>
        <a className="link" href="#" alt="none">Mon profil</a>
      </div>
      <button alt="none" type="button" className="menu__item menu__disconnect"><i className="fas fa-power-off" /></button>
    </div>
  </div>
);

export default Menu;
