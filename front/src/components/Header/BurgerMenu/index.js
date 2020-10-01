import React from 'react';
import './style.scss';
// import burgerMenu from '../../../containers/BurgerMenu';

const BurgerMenu = ({inputChange}) => (
  <div className="menu__burger">
    <button type="button" className="burger__button">
      <i className="burger__icon fas fa-bars fa-2x" />
    </button>
  </div>
);

export default BurgerMenu;
