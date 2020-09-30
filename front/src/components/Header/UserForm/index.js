import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

// fa-times = X
// fa-power-off = Power button

const UserForm = () => (
  <div className="login__container">
    <div>
      <button alt="none" type="button" className="menu__item menu__disconnect"><i className="fas fa-power-off" /></button>
    </div>
    { false && <RegisterForm />}
    { false && <LoginForm /> }
  </div>
);

export default UserForm;
