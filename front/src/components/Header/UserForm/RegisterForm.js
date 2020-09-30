import React from 'react';

const RegisterForm = () => (
  <form className="login__form">
    <p className="form__label">Nom</p>
    <input className="form__input" type="text" placeholder="Votre nom" />
    <p className="form__label">Prénom</p>
    <input className="form__input" type="text" placeholder="Votre prénom" />
    <p className="form__label">Email</p>
    <input className="form__input" type="email" placeholder="exemple@gmail.com" />
    <p htmlFor="password" className="form__label">Mot de passe</p>
    <input className="form__input" type="password" placeholder="Votre mot de passe" />
    <button type="button" className="form__button">S'enregistrer</button>
    <a className="form__link" href="#" alt="none">Se connecter</a>
  </form>
);

export default RegisterForm;
