import React from 'react';
import './style.scss';

const Header = () => (
  <div className="header">
    <button type="button" className="header__button">
      <icon className="header__icon fas fa-bars fa-2x" />
    </button>
  </div>
);

export default Header;
