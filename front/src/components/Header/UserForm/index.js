import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

// fa-times = X
// fa-power-off = Power button

const UserForm = ({ registerOpened = false, loginOpened = false }) => {
  const buttonClass = registerOpened || loginOpened ? 'fas fa-times' : 'fas fa-power-off';
  return (
    <div className="login__container">
      <div>
        <button alt="none" type="button" className="menu__item menu__disconnect"><i className={buttonClass} /></button>
      </div>
      { registerOpened && <RegisterForm />}
      { loginOpened && <LoginForm />}
    </div>
  );
};

export default UserForm;
