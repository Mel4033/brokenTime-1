import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';
import BurgerMenu from './BurgerMenu';
import DesktopMenu from './DesktopMenu';
import LoginForm from './LoginForm';

const Header = () => (
  <div className="header">
    <DesktopMenu />
    <BurgerMenu />
    <LoginForm />
  </div>
);

export default Header;
