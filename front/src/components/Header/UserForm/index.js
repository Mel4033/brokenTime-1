import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';

// fa-times = X
// fa-power-off = Power button

const UserForm = () => (
  <div className="login__container">
    <div>
      <button alt="none" type="button" className="menu__item menu__disconnect"><i className="fas fa-power-off" /></button>
    </div>
    <form className="login__form">
      <label className="form__label">Email</label>
      <input className="form__input" type="text" placeholder="exemple@gmail.com" />
      <label className="form__label">Mot de passe</label>
      <input className="form__input" type="password" placeholder="password1234" />
      <button className="form__button">Connexion</button>
      <a className="form__link" href="#" alt="none">S'enregistrer</a>
    </form>
  </div>
);

export default UserForm;
