import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';
import BurgerMenu from '../../containers/BurgerMenu';
import DesktopMenu from '../../containers/DesktopMenu';
import UserForm from '../../containers/UserForm';

const Header = () => (
  <div className="header">
    <DesktopMenu />
    <BurgerMenu />
    <UserForm />
  </div>
);

export default Header;
