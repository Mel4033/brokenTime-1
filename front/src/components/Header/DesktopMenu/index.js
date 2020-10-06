import React from 'react';
import { NavLink } from 'react-router-dom';

const DesktopMenu = () => (
  <div className="menu__desktop">
    <div className="menu__links">
      <NavLink exact to="/" className="link" href="#" alt="none">Accueil</NavLink>
      <NavLink exact to="/library" className="link" href="#" alt="none">Bibliothèque</NavLink>
      <NavLink exact to="/profil" className="link" href="#" alt="none">Mon profil</NavLink>
      <NavLink exact to="/TeamPage" className="link" href="#" alt="none">L'équipe</NavLink>
    </div>
  </div>
);

export default DesktopMenu;
