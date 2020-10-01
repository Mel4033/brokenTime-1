import React from 'react';

const LoginForm = ({ switchToRegisterForm, email, password, inputChange, loginSubmit }) => (
  <form
    className="login__form"
    onSubmit={(evt) => {
      evt.preventDefault();
      loginSubmit();
    }}
  >
    <p className="form__label">Email</p>
    <input className="form__input" type="text" placeholder="Exemple@gmail.com" />
    <p className="form__label">Mot de passe</p>
    <input className="form__input" type="password" placeholder="Mot de passe" />
    <button type="submit" className="form__button">Connexion</button>
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
