import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({isLoginOpened}) => (
  <div className="menu">
    <div className="menu__burger">
      <button type="button" className="burger__button">
        <i className="burger__icon fas fa-bars fa-2x" />
      </button>
    </div>
    <div className="menu__desktop">
      <div className="menu__links">
        <NavLink exact to="/" className="link" href="#" alt="none">Accueil</NavLink>
        <NavLink exact to="/library" className="link" href="#" alt="none">Bibliothèque</NavLink>
        <NavLink exact to="/profil" className="link" href="#" alt="none">Mon profil</NavLink>
      </div>
      <button alt="none" type="button" className="menu__item menu__disconnect"><i className="fas fa-power-off" /></button>
    </div>
  </div>
);

export default Menu;
