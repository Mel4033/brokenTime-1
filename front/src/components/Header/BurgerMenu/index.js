import React from 'react';
import './style-mobile.scss';
import { Link } from 'react-router-dom';

const BurgerMenu = () => (
  <div className="dropdown">
    <button type="button" alt="button" className="dropbtn" />
    <div className="dropdown-content">
      <Link to="/" className="link">Accueil</Link>
      <Link to="/Profil" className="link">Mon profil</Link>
      <Link to="/library" className="link">Bibliothéque</Link>
    </div>
  </div>
);

export default BurgerMenu;
