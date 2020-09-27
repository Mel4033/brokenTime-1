import React from 'react';
import './style.scss';

const Menu = () => (
  <div className="menu">
    <div className="menu__burger">
      <button type="button" className="header__button">
        <icon className="header__icon fas fa-bars fa-2x" />
      </button>
    </div>
    <div className="menu__desktop">
      <div className="menu__links">
        <a className="link" href="#" alt="none">Accueil</a>
        <a className="link" href="#" alt="none">Bibliothèque</a>
        <a className="link" href="#" alt="none">Mon profil</a>
      </div>
      <button type="button" className="menu__item menu__disconnect">Déconnexion</button>
    </div>
  </div>
);

export default Menu;
