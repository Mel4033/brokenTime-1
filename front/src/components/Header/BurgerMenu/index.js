import React from 'react';
import './style-mobile.scss';
import { NavLink } from 'react-router-dom';

const BurgerMenu = ({isLogged}) => (
  <div className="dropdown">
    <button type="button" alt="button" className="dropbtn" />
    <div className="dropdown-content">
      <NavLink exact to="/" className="link" href="#" alt="none">Accueil</NavLink>
      <NavLink exact to="/library" className="link" href="#" alt="none">Bibliothèque</NavLink>
      {isLogged && <NavLink exact to="/profil" className="link" href="#" alt="none">Mon profil</NavLink>}
      <NavLink exact to="/TeamPage" className="link" href="#" alt="none">L'équipe</NavLink>
      <NavLink exact to="/contact" className="link" href="#" alt="none">Contact</NavLink>
    </div>
  </div>
);

export default BurgerMenu;
