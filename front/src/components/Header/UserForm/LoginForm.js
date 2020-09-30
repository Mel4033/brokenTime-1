import React from 'react';

const LoginForm = ({ switchToRegisterForm, email, password, inputChange }) => (
  <form className="login__form">
    <p className="form__label">Email</p>
    <input className="form__input" type="text" placeholder="Exemple@gmail.com" />
    <p className="form__label">Mot de passe</p>
    <input className="form__input" type="password" placeholder="Password1234" />
    <button type="button" className="form__button">Connexion</button>
    <a
      className="form__link"
      onClick={() => {
        switchToRegisterForm();
      }}
    >
      S'inscrire
    </a>
  </form>
);

export default LoginForm;
