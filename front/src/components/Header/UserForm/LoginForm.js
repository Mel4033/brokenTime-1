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
    <input
      onChange={(evt) => inputChange(evt.target.name, evt.target.value)}
      value={email}
      name="email"
      className="form__input"
      type="text"
      placeholder="Exemple@gmail.com"
      required
    />
    <p className="form__label">Mot de passe</p>
    <input
      onChange={(evt) => inputChange(evt.target.name, evt.target.value)}
      value={password}
      name="password"
      className="form__input"
      type="password"
      placeholder="Mot de passe"
    />
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
