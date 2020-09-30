import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';
import BurgerMenu from './BurgerMenu';
import DesktopMenu from './DesktopMenu';
import UserForm from './UserForm';

const Header = () => (
  <div className="header">
    <DesktopMenu />
    <BurgerMenu />
    <UserForm />
  </div>
);

export default Header;
