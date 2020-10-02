import React from 'react';
import './style-mobile.scss';

const BurgerMenu = () => (
<div class="dropdown">
  <button class="dropbtn"></button>
  <div class="dropdown-content">
    <a href="/">Acceuil</a>
    <a href="/Profil">Mon profil</a>
    <a href="/library">Bibliothéque</a>
  </div>
</div>
);

export default BurgerMenu;
