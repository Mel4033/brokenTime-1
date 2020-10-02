import React from 'react';
import './style-mobile.scss';
import { Link } from 'react-router-dom';

const BurgerMenu = () => (
  <div className="dropdown">
    <button type="button" alt="button" className="dropbtn" />
    <div className="dropdown-content">
      <Link to="/">Acceuil</Link>
      <Link to="/Profil">Mon profil</Link>
      <Link to="/library">Bibliothéque</Link>
    </div>
  </div>
);

export default BurgerMenu;
