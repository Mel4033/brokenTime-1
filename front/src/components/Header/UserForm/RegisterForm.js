import React from 'react';

const RegisterForm = ({ switchToLoginForm, lastname, firstname, email, password, inputChange, registerSubmit }) => (
  <form
    className="login__form"
    onSubmit={(evt) => {
      evt.preventDefault();
      registerSubmit();
    }}
  >
    <p className="form__label">Pseudo</p>
    <input name="nickname" className="form__input" type="text" placeholder="Votre nom" />
    <p className="form__label">Email</p>
    <input name="email" className="form__input" type="email" placeholder="Exemple@gmail.com" />
    <p htmlFor="password" className="form__label">Mot de passe</p>
    <input name="password" className="form__input" type="password" placeholder="Votre mot de passe" />
    <p htmlFor="confirmpassword" className="form__label">Confirmer mot de passe</p>
    <input name="confirmpassword" className="form__input" type="password" placeholder="Confirmation du mot de passe" />
    <button type="submit" className="form__button">S'inscrire</button>
    <a
      className="form__link"
      onClick={() => {
        switchToLoginForm();
      }}
    >
      Se connecter
    </a>
  </form>
);

export default RegisterForm;
