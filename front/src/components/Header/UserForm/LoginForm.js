import React from 'react';

const LoginForm = () => (
  <form className="login__form">
    <p className="form__label">Email</p>
    <input className="form__input" type="text" placeholder="exemple@gmail.com" />
    <p className="form__label">Mot de passe</p>
    <input className="form__input" type="password" placeholder="password1234" />
    <button type="button" className="form__button">Connexion</button>
    <a className="form__link" href="#" alt="none">S'enregistrer</a>
  </form>
);

export default LoginForm;
